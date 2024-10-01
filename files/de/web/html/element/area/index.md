---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Element/area
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML) Element definiert einen Bereich innerhalb einer Bildkarte, die vordefinierte klickbare Bereiche besitzt. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hyperlinks")}} zu verbinden.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}} Elements verwendet.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alt`
  - : Eine alternative Textzeichenkette zur Anzeige in Browsern, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer die gleiche Art von Wahl bietet, wie es das Bild tut, wenn es ohne den alternativen Text angezeigt wird.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href) Attribut verwendet wird.
- `coords`

  - : Das `coords` Attribut beschreibt die Koordinaten des [`shape`](#shape) Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert spezifiziert die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die die oberen linken und unteren rechten Ecken des Rechtecks angeben.
    - `circle`: Der Wert ist `x,y,radius`. Der Wert spezifiziert die Koordinaten des Kreismittelpunkts und den Radius.
      Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert spezifiziert die Koordinaten der Ecken des Polygons.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln.

- `download`
  - : Dieses Attribut, falls vorhanden, zeigt an, dass der Autor beabsichtigt, die Verknüpfung zum Herunterladen einer Ressource zu verwenden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Element/a#download) Attributs.
- `href`
  - : Das Ziel des Hyperlinks für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; falls ja, repräsentiert das `<area>` Element keinen Hyperlink.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die beim Verfolgen des Hyperlinks {{HTTPMethod("POST")}} Anfragen mit dem Body `PING` vom Browser im Hintergrund gesendet werden.
    Typischerweise für Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer Anfrage mit gleichem Ursprung, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Für Anker, die das [`href`](#href) Attribut enthalten, gibt dieses Attribut das Verhältnis des Zielobjekts zum Verknüpfungsobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die für den Dokumentautor Bedeutung haben könnte.
    Das Standardverhältnis, wenn kein anderes angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die Spezifikationen für HTML definiert die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, die den gesamten Bereich über alle definierten Formen hinaus angeben.
- `target`

  - : Ein Schlüsselwort oder vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die verknüpfte Ressource angezeigt wird.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext der aktuellen Seite an, sofern die aktuelle Seite in einem Frame eingebettet ist.
      Wenn kein übergeordneter Kontext vorhanden ist, wirkt es gleich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext (dem Browsing-Kontext, der ein Vorfahr der aktuellen ist und keinen übergeordneten Kontext hat) an.
      Wenn kein übergeordneter Kontext vorhanden ist, wirkt es gleich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.

    > [!NOTE]
    > Wenn `target="_blank"` bei `<area>` Elementen gesetzt wird, bietet es implizit das gleiche `rel` Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Supportstatus.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow-Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasierte Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Kein Inhalt; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasierte Inhalte</a> akzeptiert. Das <code>&#x3C;area></code> Element muss einen Vorfahren {{HTMLElement("map")}} haben, nicht zwingend einen direkten Elternteil.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, wenn das <a href="#href"><code>href</code></a> Attribut vorhanden ist, andernfalls
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
