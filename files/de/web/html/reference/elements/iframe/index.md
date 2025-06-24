---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle Seite ein.

{{InteractiveExample("HTML Demo: &lt;iframe&gt;", "tabbed-standard")}}

```html interactive-example
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
</iframe>
```

```css interactive-example
iframe {
  border: 1px solid black;
  width: 100%; /* takes precedence over the width set with the HTML width attribute */
}
```

Jeder eingebettete Browsing-Kontext verfügt über ein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext – derjenige ohne Eltern – ist in der Regel das Browser-Fenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumenten-Umgebung ist, erfordert jedes `<iframe>` auf einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, achten Sie auf Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Permissions Policy setzt eine zusätzliche Einschränkung, zusätzlich zur Richtlinie, die im {{httpheader("Permissions-Policy")}} Header festgelegt ist. Sie ersetzt sie nicht.

- `allowfullscreen`

  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbild-Modus durch Aufruf der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` gesetzt, wenn ein `<iframe>` mit unterschiedlichem Ursprung die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` gesetzt, um das `<iframe>` credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal an die Lebensdauer des obersten Dokuments gebunden ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, sodass Dokumente mit COEP eingebunden werden können, die dies nicht haben. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Das iframe sofort beim Laden der Seite laden (dies ist der Standardwert).
    - `lazy`

      - : Das Laden des iframes verzögern, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}}, wie vom Browser definiert, erreicht.
        Die Absicht ist es, das Netzwerk und die Speicherbandbreite einzusparen, die erforderlich ist, um den Rahmen abzurufen, bis der Browser zu Recht annimmt, dass er benötigt wird.
        Dies verbessert die Leistung und vermindert Kosten in den meisten typischen Anwendungsfällen, insbesondere indem die anfänglichen Seitenladezeiten reduziert werden.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme zur Vermeidung von Tracking.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} Elemente verwendet werden; dem `formtarget` Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder dem `windowName` Parameter in der Methode [`window.open()`](/de/docs/Web/API/Window/open).
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abruf der Ressource des Rahmens gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an Ursprünge gesendet, die kein {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) verwenden.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite begrenzt: Ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Ursprünge")}} gesendet, aber CORS-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger gesichertes Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei einer Anfrage im selben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger gesichertes Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leckt.

- `sandbox`

  - : Kontrolliert die auf den eingebetteten Inhalt im `<iframe>` angewendeten Einschränkungen. Der Wert des Attributs kann entweder leer sein, um alle Beschränkungen anzuwenden, oder leerzeichen-getrennte Tokens enthalten, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie durch die Navigation, die zu einem Dateidownload führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat, oder ob JS-Code ihn ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu senden. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Senden des Formulars löst keine Eingabetestvalidierung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen mittels [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch die Empfang von [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignissen.
    - `allow-orientation-lock`
      - : Lässt die Ressource den [Bildschirm orientierungssperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (erstellt z.B. durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität stillschweigend scheitern.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne dass diese Sandboxing-Flags darauf angewendet werden. Dies ermöglicht es zum Beispiel, eine Drittanbieter-Anzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite, auf die die Anzeige verlinkt, anzuwenden. Wenn dieser Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Embeds, Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend betrachtet, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} versagt (verhindert möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn diese Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext (denjenigen namens `_top`) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, jedoch nur, wenn dies durch eine Benutzergeste initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigations zu nicht-`http` Protokollen, die im Browser eingebaut oder [durch eine Webseite registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **stark abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da das dem eingebetteten Dokument ermöglicht, das `sandbox` Attribut zu entfernen — was es nicht sicherer macht, als das `sandbox` Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalt außerhalb eines sandboxed `iframe` anzeigen kann — z.B. wenn der Betrachter den Rahmen in einem neuen Tab öffnet. Solcher Inhalt sollte auch von einem _separaten Ursprung_ bedient werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, beim Öffnen eines Popup-Fensters oder beim Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox` Attribut wird der neue Browsing-Kontext denselben `sandbox` Einschränkungen unterworfen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eröffnet wurde, eine neue Seite in einem separaten Tab öffnet, wird das Absenden von Formularen in diesem neuen Browsing-Kontext leise scheitern.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die den [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen des `src` Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` in dem Rahmen in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie Anker-Links.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seine Position. Wenn ein Browser das `srcdoc` Attribut nicht unterstützt, wird auf die URL im `src` Attribut zurückgefallen.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie Anker-Links.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund häufiger Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und dessen oberen und unteren Grenzen.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und dessen linken und rechten Grenzen.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser für den Rahmen eine Bildlaufleiste bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}} Elemente, sind im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die Eigenschaft [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) bezieht sich auf das `document` innerhalb des `<iframe>`, ebenso wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz auf sein übergeordnetes Fenster erhalten.

Der Skriptzugang zum Inhalt eines Rahmens unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window` Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Rahmens, der auf das übergeordnete Element des Rahmens zugreift. Eine Übergreifende Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keinen Einfluss auf `<iframe>` Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks auszuforschen. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis auf `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, selbst wenn das `<iframe>` nicht geladen wird.

## Barrierefreiheit

Personen, die mit assistiver Technologie wie einem Screenreader navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere bei Seiten mit mehreren `<iframe>`s und/oder wenn Embeds interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel, das Live-Beispiel selbst und das [probieren Sie es aus](#try_it) Beispiel oben sind beide `<iframe>` Einbindungen von Inhalten einer anderen MDN-Seite.

#### HTML

```html
<iframe
  src="https://example.org"
  title="iframe Example 1"
  width="400"
  height="300">
</iframe>
```

#### Ergebnis

{{ EmbedLiveSample('A_basic_iframe', 640,400)}}

### Einbettung von Quellcode in ein `<iframe>`

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektion beim Anzeigen von nutzergeneriertem Inhalt zu verhindern, wenn es mit dem `sandbox` Attribut kombiniert wird.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` als Basis-URL explizit angeben.

#### HTML

```html-nolint
<article>
  <footer>Nine minutes ago, <i>jc</i> wrote:</footer>
  <iframe
    sandbox
    srcdoc="<p>There are two ways to use the <code>iframe</code> element:</p>
<ol>
<li><a href=&quot;about:srcdoc#embed_another&quot;>To embed content from another page</a></li>
<li><a href=&quot;about:srcdoc#embed_user&quot;>To embed user-generated content</a></li>
</ol>
<h2 id=&quot;embed_another&quot;>Embedding content from another page</h2>
<p>Use the <code>src</code> attribute to specify the URL of the page to embed:</p>
<pre><code>&amp;lt;iframe src=&quot;https://example.org&quot;&amp;gt;&amp;lt;/iframe&amp;gt;</code></pre>
<h2 id=&quot;embed_user&quot;>Embedding user-generated content</h2>
<p>Use the <code>srcdoc</code> attribute to specify the content to embed. This post is already an example!</p>
"
    width="500"
    height="250"
></iframe>
</article>
```

Hier ist, wie Sie Escape-Sequenzen verwenden, wenn Sie `srcdoc` nutzen:

- Schreiben Sie zuerst das HTML heraus und maskieren Sie alles, was Sie in einem normalen HTML-Dokument maskieren würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren im `srcdoc` Attribut dasselbe Zeichen. Um es also zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jegliche Et-Zeichen (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie jegliche Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc` Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorhergehenden, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassungen</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: frame-ancestors](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
