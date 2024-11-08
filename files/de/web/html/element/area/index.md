---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Element/area
l10n:
  sourceCommit: ff6f4762dc0f086443390e11cff3753c18fff69d
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bilderkarte, der vordefinierte klickbare Bereiche hat. Eine _Bilderkarte_ ermöglicht es, geometrische Bereiche eines Bildes mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verbinden.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}}-Elements verwendet.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `alt`
  - : Ein alternativer Textstring, der auf Browsern angezeigt wird, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Wahlmöglichkeit bietet, wie das Bild ohne den alternativen Text bieten würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`

  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs im Hinblick auf Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und untere rechte Ecke des Rechtecks angeben.
    - `circle`: Der Wert ist `x,y,radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ecken des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln.

- `download`
  - : Dieses Attribut zeigt an, wenn es vorhanden ist, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.
- `href`
  - : Das Hyperlinkziel für das Gebiet.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; in diesem Fall stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine liste von durch Leerzeichen getrennten URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser im Hintergrund gesendet werden.
    Typischerweise für Tracking-Zwecke verwendet.
- `referrerpolicy`

  - : Ein Zeichenfolgenwert, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Bei Navigationen auf demselben Ursprung wird weiterhin der Pfad einbezogen.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsebenen-Protokoll gleich bleibt (HTTPS→HTTPS), aber senden Sie ihn nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardwert): Senden Sie eine vollständige URL bei einer Anfrage innerhalb des gleichen Ursprungs, senden Sie nur den Ursprung, wenn das Sicherheitsebenen-Protokoll gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Für Anker mit dem [`href`](#href)-Attribut, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die möglicherweise für den Dokumentautor Bedeutung hat.
    Die Standardbeziehung, wenn keine andere gegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugeordneten Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die ein rechteckiges Gebiet definieren; `circle`, die ein kreisförmiges Gebiet definieren; `poly`, die ein Polygon definieren; und `default`, die das gesamte Gebiet jenseits aller definierten Formen angeben.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die verlinkte Ressource angezeigt werden soll.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standardwert): Zeige die Ressource im aktuellen Browsing-Kontext.
    - `_blank`: Zeige die Ressource in einem neuen, unbenannten Browsing-Kontext.
    - `_parent`: Zeige die Ressource im übergeordneten Browsing-Kontext des aktuellen Kontexts, wenn die aktuelle Seite innerhalb eines Rahmens ist.
      Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dieser wie `_self`.
    - `_top`: Zeige die Ressource im obersten Browsing-Kontext (dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat).
      Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dieser wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Die Einstellung von `target="_blank"` auf `<area>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie die Einstellung [rel="noopener"](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>None; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">formulierenden Inhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, muss jedoch kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
