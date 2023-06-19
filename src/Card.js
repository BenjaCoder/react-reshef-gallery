
export default function Card(props) {

    const bgColor = props.frame === "Normal" ? "#FDE68A"
    : props.frame === "Effect" ? "#FF8B53"
    : props.frame === "Ritual" ? "#6395FF"
    : props.frame === "Spell" ? "green"
    : props.frame === "Trap" ? "violet"
    : "gray";

    const stars = [];
    for (let i = 0; i < props.level; i++) {
        stars.push(
            <img
                className="level-star"
                src="./images/level-star3.svg"
                alt="level star"
                style={{
                    left: `${`${props.level < 12 ? 180.5 : 188}` - (32*i)}px`
                }}
            />
        )
    }

    return (
        <div className="card" title={`${props.lore[0]}\n${props.lore[1]}`}>
            <img
                src={`./images/${props.frame}.png`}
                className="card-frame"
                alt={props.frame}
            />
            <p className="card-overlay-name">{props.name.substring(0, 16)}</p>
            <div className="level-stars">
                {stars}
            </div>
            <img
                src={props.imageUrl}
                className="card-artwork"
                alt={`artwork for ${props.name}`}
            />
            <div className="card-overlay-type">
                <img src={`./images/types/type-${props.type}.svg`} alt={`${props.type} type`}/>
                <img
                    className="type-symbol"
                    src={`./images/types/type-symbols/${props.type}-symbol.png`}
                    alt={`${props.type} symbol`}
                 />
            </div>
            <div className="card-overlay-attribute">
                <img src={`./images/attrs/attr-${props.attribute}.svg`} alt={`${props.type} attribute`}/>
            </div>
            <div className="card-overlay-atk">
                <p>ATK</p>
                <p>{props.atk}</p>
            </div>
            <div className="card-overlay-def">
                <p>DEF</p>
                <p>{props.def}</p>
            </div>
            <div className="card-details">
                <p>#{props.id}. {
                    props.name.length > 22
                    ? `${(props.name).substring(0, 20)}...`
                    : props.name
                    }
                </p>
                <div className="level-frame-line">
                    <p>Level {props.level}</p>
                    <p>--</p>
                    <p
                        className="frame-pill"
                        style={{
                            backgroundColor:bgColor,
                        }}
                    >
                        {props.frame.toUpperCase()}
                    </p>
                </div>
                <div className="attr-type-line">
                    <p>{props.type}</p>
                    <p>--</p>
                    <p>{props.attribute}</p>
                </div>
                <div className="atk-def-line">
                    <p>ATK {props.atk}</p>
                    <p>/</p>
                    <p>DEF {props.def}</p>
                </div>
            </div>
        </div>
    )
}