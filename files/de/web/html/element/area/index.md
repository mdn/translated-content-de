---
title: "<area>: Das Bildkartenbereich-Element"
slug: Web/HTML/Element/area
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, der vordefinierte anklickbare Bereiche enthält. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}}-Elements verwendet.

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alt`
  - : Eine Textalternative, die in Browsern angezeigt wird, die keine Bilder anzeigen. Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Wahlmöglichkeit bietet wie das Bild, wenn es ohne den Alternativtext angezeigt würde. Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`

  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs hinsichtlich Größe, Form und Platzierung eines `<area>`. Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: der Wert ist `x1,y1,x2,y2`. Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an. Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die die obere linke und die untere rechte Ecke des Rechtecks angeben.
    - `circle`: der Wert ist `x,y,Radius`. Der Wert gibt die Koordinaten des Kreiszentrums und den Radius an. Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Kanten des Polygons an. Wenn das erste und letzte Koordinatenpaar nicht gleich sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln.

- `download`
  - : Dieses Attribut, falls vorhanden, zeigt an, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden. Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich. Sein Wert ist eine gültige URL. Dieses Attribut kann weggelassen werden; in diesem Fall stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die beim Folgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` im Hintergrund vom Browser gesendet werden. Typischerweise verwendet für Tracking-Zwecke.
- `referrerpolicy`

  - : Ein String, der anzeigt, welcher Referrer beim Abrufen der Ressource verwendet wird:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Herkünfte")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf die Herkunft der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Herkünfte gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen auf derselben Herkunft enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Herkunft")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur die Herkunft des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage an die gleiche Herkunft ausgeführt wird, nur die Herkunft senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält die Herkunft _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Herkünfte und Pfade von TLS-geschützten Ressourcen an unsichere Herkünfte preisgibt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an. Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen. Die Werte und ihre Bedeutung werden von einer Behörde festgelegt, die für den Dokumentautor relevant sein könnte. Die Standardbeziehung, wenn keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugeordneten Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, die den gesamten Bereich jenseits der definierten Formen angeben.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, um die verlinkte Ressource anzuzeigen. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, nicht benannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite innerhalb eines Rahmens ist. Wenn es keinen übergeordneten gibt, verhält sich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten gibt, verhält sich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Die Einstellung `target="_blank"` auf `<area>`-Elementen bietet implizit das gleiche `rel`-Verhalten wie die Einstellung von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

## Beispiele

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Click to go Left" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Click to go Right" />
</map>
<img
  usemap="#primary"
  src="https://dummyimage.com/350x150"
  alt="350 x 150 pic" />
```

### Ergebnis

{{ EmbedLiveSample('Examples', 360, 160) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierungsmäßiger Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierungsmäßigen Inhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, dieser muss jedoch kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, wenn das <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
