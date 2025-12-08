---
title: "<area>: Das Image-Map-Bereichselement"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`<area>`**-[HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Image-Map, die vordefinierte anklickbare Bereiche hat. Eine _Image-Map_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verbinden.

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

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Ein alternativer Textstring, der in Browsern angezeigt wird, die keine Bilder darstellen.
    Der Text sollte so formuliert sein, dass er dem Benutzer die gleiche Art von Wahlmöglichkeiten bietet, wie es das Bild täte, wenn es ohne den Alternativtext angezeigt würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel: In `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und die untere rechte Ecke des Rechtecks angeben.
    - `circle`: Der Wert ist `x,y,radius`. Der Wert spezifiziert die Koordinaten des Kreismittelpunkts und den Radius.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert spezifiziert die Koordinaten der Kanten des Polygons.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, wird der Browser das letzte Koordinatenpaar hinzufügen, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln. Unser [Formen-Generator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu erzeugen, indem Sie Punkte auf einem hochgeladenen Bild auswählen.

- `download`
  - : Dieses Attribut zeigt, falls vorhanden, an, dass die verlinkte Ressource zum Herunterladen und nicht zur Anzeige im Browser bestimmt ist.
    Weitere Details zum [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut finden Sie unter {{HTMLElement("a")}}.
- `href`
  - : Das Ziel des Hyperlinks für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; falls ja, stellt das `<area>`-Element keinen Hyperlink dar.
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<area>`-Element als **Interest Invoker**. Sein Wert ist die `id` des Zielelements, das in irgendeiner Weise betroffen wird (normalerweise angezeigt oder verborgen), wenn Interesse an dem Invoker-Element gezeigt oder verloren wird (zum Beispiel durch Hovern/Nicht-Hovern oder Fokussieren/Nicht-Fokussieren). Siehe [Anwendung von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) für weitere Details und Beispiele.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` im Hintergrund vom Browser gesendet werden.
    Typischerweise für das Tracking verwendet.
- `referrerpolicy`
  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer an andere Ursprünge wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Anfragen über den Ursprung hinaus enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine same-origin-Anfrage durchgeführt wird, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer beinhaltet den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen preisgibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Bei Ankern mit dem [`href`](#href)-Attribut gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Autorität registriert, die für den Dokumentautor Bedeutung haben könnte.
    Die Standardbeziehung, wenn keine andere gegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die HTML-Spezifikationen definieren die Werte `rect`, die ein rechteckiges Gebiet definieren; `circle`, die ein kreisförmiges Gebiet definieren; `poly`, die ein Polygon definieren; und `default`, die das gesamte Gebiet über alle definierten Formen hinaus angeben.
- `target`
  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, um die verlinkte Ressource anzuzeigen.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Zeigen Sie die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigen Sie die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigen Sie die Ressource im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Rahmen ist.
      Wenn es keinen Eltern gibt, verhält sich dies wie `_self`.
    - `_top`: Zeigen Sie die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat).
      Wenn es keinen Eltern gibt, verhält sich dies wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit das gleiche `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

## Beispiele

### Bild mit anklickbaren Bereichen

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

{{ EmbedLiveSample('Bild mit anklickbaren Bereichen', 360, 160) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Anfangstag haben und darf kein Endetag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen {{HTMLElement("map")}}-Vorfahren haben, muss aber kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn ein <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
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
