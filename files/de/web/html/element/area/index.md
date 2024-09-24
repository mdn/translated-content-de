---
title: "<area>: Das Bereichselement der Bildkarte"
slug: Web/HTML/Element/area
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML) Element definiert einen Bereich innerhalb einer Bildkarte, die vordefinierte anklickbare Bereiche enthält. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}} Elements verwendet.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alt`
  - : Ein alternativer Textstring, der in Browsern angezeigt wird, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl bietet, wie das Bild es bieten würde, wenn es ohne den alternativen Text angezeigt wird.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href) Attribut verwendet wird.
- `coords`

  - : Das `coords` Attribut beschreibt die Koordinaten des [`shape`](#shape) Attributs in Größe, Form und Platzierung einer `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert spezifiziert die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks.
      Zum Beispiel: In `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und untere rechte Ecke des Rechtecks angeben.
    - `circle`: Der Wert ist `x,y,radius`. Der Wert spezifiziert die Koordinaten des Kreismittelpunkts und den Radius.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert spezifiziert die Koordinaten der Kanten des Polygons.
      Wenn die ersten und letzten Koordinatenpaare nicht gleich sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln.

- `download`
  - : Dieses Attribut gibt, falls vorhanden, an, dass der Autor beabsichtigt, den Hyperlink zum Herunterladen einer Ressource zu verwenden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Element/a#download) Attributs.
- `href`
  - : Das Ziel des Hyperlinks für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; in diesem Fall stellt das `<area>` Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, zu denen, wenn der Hyperlink verfolgt wird, im Hintergrund {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` vom Browser gesendet werden.
    Typischerweise zum Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin")}}s ohne {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, und {{Glossary("port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigierungen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin policy", "gleichen Ursprung")}} gesendet, aber Anfragen an andere Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Destination senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage zum gleichen Ursprung ausgeführt wird, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Destination senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Für Anker, die das [`href`](#href) Attribut enthalten, spezifiziert dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und deren Semantik werden von einer Autorität registriert, die für den Dokumentautor von Bedeutung sein könnte.
    Die Standardbeziehung, wenn keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, die den gesamten Bereich über alle definierten Formen hinaus angeben.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing context")}}, in dem die verknüpfte Ressource angezeigt wird.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigen Sie die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigen Sie die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigen Sie die Ressource im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Frame ist.
      Wenn es keinen Elternteil gibt, verhält es sich wie `_self`.
    - `_top`: Zeigen Sie die Ressource im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat).
      Wenn es keinen Elternteil gibt, verhält es sich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>` Elemente bietet implizit dasselbe `rel` Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt. Sehen Sie sich den [Browser-Support](#browser-kompatibilität) an, um den Support-Status zu erfahren.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert. Das <code>&#x3C;area></code> Element muss einen Vorgänger {{HTMLElement("map")}} haben, aber es muss kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn <a href="#href"><code>href</code></a> Attribut vorhanden ist, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
