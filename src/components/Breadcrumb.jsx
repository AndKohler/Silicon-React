import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className="page-title">
          <div className="breadcrumb-container">
            <ul className='breadcrumb'>
                <FontAwesomeIcon icon={faHouse} />
                <li><Link to='/'>Homepage</Link></li>
                <FontAwesomeIcon icon={faAnglesRight} />
                {
                  pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                      <li key={to}>
                        { index === pathnames.length - 1
                            ? (<span>{value.replace(/-/g, ' ')}</span>)
                            : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                      </li>
                    );
                  })
                }
            </ul>
          </div>
        </section>
    )
}

export default Breadcrumb