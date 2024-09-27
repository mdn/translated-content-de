---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Element/area
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, die vordefinierte klickbare Bereiche hat. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit [Hyperlinks](/de/docs/Glossary/Hyperlink) zu verknüpfen.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}}-Elements verwendet.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alt`
  - : Eine alternative Zeichenfolge, die in Browsern angezeigt wird, die keine Bilder darstellen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl bietet, wie das Bild es ohne den alternativen Text bieten würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`

  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, was die oberen linken und unteren rechten Ecken des Rechtecks angibt.
    - `circle`: Der Wert ist `x,y,Radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ecken des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln.

- `download`
  - : Dieses Attribut gibt, falls vorhanden, an, dass der Autor beabsichtigt, dass der Hyperlink zum Herunterladen einer Ressource verwendet wird.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; in diesem Fall stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden.
    Typischerweise für Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an [Origin](/de/docs/Glossary/origin)s ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer ist auf die Herkunft der referenzierenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Urspünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird bei [gleichem Ursprung](/de/docs/Glossary/Same-origin_policy) gesendet, aber anfragen über den Ursprung hinaus enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei gleicher Ursprungsanfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung und den Pfad einschließen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken lässt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die eine Bedeutung für den Dokumentautor haben könnte.
    Die Standardbeziehung, falls keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, was einen rechteckigen Bereich definiert; `circle`, was einen kreisförmigen Bereich definiert; `poly`, was ein Polygon definiert; und `default`, was den gesamten Bereich über alle definierten Formen hinaus angibt.
- `target`

  - : Ein Schlüsselwort oder autordefinierter Name des [Browsing-Kontexts](/de/docs/Glossary/browsing_context), in dem die verknüpfte Ressource angezeigt werden soll.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext der aktuellen an, wenn die aktuelle Seite in einem Frame ist.
      Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahre der aktuellen ist und keinen übergeordneten Kontext hat).
      Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrase-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein [void element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrase-Inhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, muss jedoch kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
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
