---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<iframe>`**-Element in [HTML](/de/docs/Web/HTML) stellt einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar, der eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Document](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` verfügbar sind (z. B. Zugriff auf das Mikrofon, die Kamera, den Akku, Web-Sharing usw.) basierend auf dem Ursprung der Anfrage.

    Sehen Sie sich [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele an.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie setzt zusätzliche Einschränkungen neben der im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie durch. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` gesetzt, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die `<iframe>`-Quelle gesendet werden sollen. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` credentorienlos zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das `<iframe>` laden soll:
    - `eager`
      - : Laden Sie das `<iframe>` sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögern Sie das Laden des `<iframe>`, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Ziel ist es, das erforderliche Netzwerk- und Speicherbandbreite zur Erfassung des Frames zu vermeiden, bis der Browser hinreichend sicher ist, dass es benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein zielbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}-Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder den `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Darüber hinaus wird der Name eine Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document)-Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthält.
- `referrerpolicy`
  - : Gibt an, welcher [Referer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Frames gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referer wird auf den Origin der verweisenden Seite beschränkt sein: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Origins gesendete Referer wird auf das Schema, den Host und den Port beschränkt. Navigationsvorgänge innerhalb desselben Origins enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referer wird für {{Glossary("Same-origin_policy", "Same-Origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referer-Informationen.
    - `strict-origin`
      - : Sendet nur den Origin des Dokuments als Referer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber schickt ihn nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL, wenn eine Same-Origin-Anfrage durchgeführt wird, sendet nur den Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS) und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referer wird den Origin _und_ den Pfad umfassen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Origins leakt.

- `sandbox`
  - : Steuert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Token, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code dies ohne Benutzereingriff initiiert hat.
    - `allow-forms`
      - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht auch der Seite, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource [die Bildschirmausrichtung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (erstellt z. B. von [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität lautlos fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht einem im Sandkasten ausgeführten Dokument das Öffnen eines neuen Browsing-Kontextes, ohne dass die Sandkasten-Flags darauf angewendet werden. Dies ermöglicht es beispielsweise, eine Drittanbieter-Werbung sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite auferlegen zu müssen, auf die die Anzeige verlinkt. Wenn dieses Flag nicht eingeschlossen ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht Einbettern die Kontrolle darüber, ob ein `<iframe>` eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Origin stammend behandelt, der immer die {{Glossary("same-origin_policy", "same-origin policy")}} verletzt (was möglicherweise den Zugriff auf [Daten-/Cookie-Speicher](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und bestimmte JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht die Erstellung von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht-partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den Top-Level-Browsing-Kontext (denjenigen, der als `_top` benannt ist) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Gestattet der Ressource die Navigation im Top-Level-Browsing-Kontext, jedoch nur, wenn sie durch eine Benutzerinteraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **dringend abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — beispielsweise, wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, beim Öffnen eines Popup-Fensters oder beim Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut darauf gesetzt ist, eine neue Site in einem separaten Tab öffnet, wird das Absenden von Formularen in diesem neuen Browsing-Kontext lautlos fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn irgendwelche relativen URLs aufgelöst werden, wie z. B. Anker-Links.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können, wobei nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn irgendwelche relativen URLs aufgelöst werden, wie z. B. Anker-Links.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (die Standardeinstellung) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weitverbreiteten Missbrauchs ist dies nicht nützlich für nicht-visuelle Browser.
- `marginheight` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser einen Scrollbalken für den Frame bereitstellen soll:
    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als seine Dimensionen ist.
    - `yes`
      - : Immer einen Scrollbalken anzeigen.
    - `no`
      - : Nie einen Scrollbalken anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames)-Pseudo-Array enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, gleich wie `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript über [`window.parent`](/de/docs/Web/API/Window/parent) einen Verweis auf sein Elternfenster erhalten.

Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Eltern-Frame zugreifen. Cross-Origin-Kommunikation kann erreicht werden, indem [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet wird.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat auf `<iframe>`-Elemente keinen Einfluss.

## `error` und `load` Ereignisverhalten

Die `error`- und `load`-Ereignisse, die bei `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu erkunden. Daher feuern Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s nicht ab, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit Hilfe von Assistenztechnologien wie Bildschirmlesern navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um den Inhalt zu beschriftstellen. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn eingebettete Inhalte interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein gängiger Anwendungsfall von iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [Probiere es aus](#try_it) Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

### Einbetten von Quellcode in einem `<iframe>`

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn Benutzergenerierter Inhalt angezeigt wird, in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` als Basis-URL explizit angeben.

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

Hier ist, wie man Escape-Sequenzen beim Verwenden von `srcdoc` schreibt:

- Schreiben Sie zuerst das HTML, wobei alles so es umgedreht werden muss, wie Sie es in einem normalen HTML-Dokument tun würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Daher ersetzen Sie jedes Ampersand (`&`) mit `&amp;`, um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, damit nicht `&quot;`, der in diesem Schritt generiert wird, zu `&amp;quot;` wird.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <th scope="row">DOM-Interface</th>
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
