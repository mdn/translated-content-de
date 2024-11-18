---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle Seite ein.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in den [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Speicher und andere Rechenressourcen. Während Sie theoretisch so viele `<iframe>`s verwenden können, wie Sie möchten, sollten Sie auf Leistungsprobleme achten.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<iframe>` an. Die Richtlinie legt fest, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen sollen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Permissions Policy stellt eine weitere Einschränkung zusätzlich zur im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Auf `true` setzen, wenn das `<iframe>` durch Aufrufen der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Vollbildmodus aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` setzen, wenn einem cross-origin `<iframe>` erlaubt werden soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` setzen, um das `<iframe>` credentialsfrei zu machen, d. h., sein Inhalt wird in einem neuen, flüchtigen Kontext geladen. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, damit Dokumente mit festgelegtem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Einzelheiten.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Einzelheiten.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das `iframe` laden soll:

    - `eager`
      - : Das `iframe` wird sofort beim Laden der Seite geladen (dies ist der Standardwert).
    - `lazy`

      - : Das Laden des `iframe` wird aufgeschoben, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "Visual Viewport")}} erreicht, die vom Browser definiert wird. Das Ziel ist es, das Netzwerk und den Speicherbedarf beim Abrufen des Frames zu vermeiden, bis der Browser vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Verkürzung der anfänglichen Ladezeit der Seite.

        > [!NOTE]
        > Das Laden wird nur aufgeschoben, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder im `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}} gesendet, die ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) sind.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standard)
      - : Sendet eine vollständige URL, wenn eine Anfrage zum selben Ursprung gestellt wird, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Steuert die Einschränkungen, die auf den im `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Beschränkungen anzuwenden, oder durch Leerzeichen getrennte Token, um bestimmte Beschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie über die Navigation, die zu einem Dateidownload führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob JS-Code es ohne Benutzereingriff initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden wird weder eine Eingabevalidierung auslösen, noch Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite das Öffnen von Modalfenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} erlaubt ist, unabhängig von diesem Schlüsselwort. Es erlaubt auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) zu empfangen.
    - `allow-orientation-lock`
      - : Ermöglicht der Ressource das [Sperren der Bildschirmorientierung](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandbox-Flags darauf zu erzwingen. Dies ermöglicht zum Beispiel, eine Werbung eines Drittanbieters sicher zu sandboxen, ohne dieselben Einschränkungen auf die Seite zu erzwingen, auf die sie verweist. Wenn diese Flagge nicht enthalten ist, unterliegt eine weitergeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Beschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht es Einbettungen zu entscheiden, ob ein `iframe` eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource so behandelt, als stamme sie von einem speziellen Ursprung, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} fehlschlägt (was potenziell den Zugriff auf [Datenstorage/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext zu navigieren (den, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext zu navigieren, jedoch nur, wenn dies durch eine Benutzeraktion ausgelöst wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert sind oder [von einer Website registriert werden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, ist es **dringend abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — wodurch es nicht sicherer als das Nichtverwendene des `sandbox`-Attributs wäre.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten ebenfalls von einem _separaten Ursprung_ serviert werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut ist der neue Browsing-Kontext denselben `Sandbox`-Einschränkungen unterworfen. Dies kann Probleme verursachen — beispielsweise wenn eine Seite, die in einem `<iframe>` eingebettet ist, ohne dass das Attribut `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` festgelegt wurde, eine neue Seite in einem separaten Tab öffnet, schlägt die Formularübermittlung in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen des `Scr`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` in dem Frame geladen wird in Firefox (ab Version 65), von Chromium-basierten Browsern und Safari/iOS.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `srcdoc`

  - : Inline-HTML, das eingebettet werden soll und das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments entsprechen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten weggelassen werden können, und nur der Body-Inhalt übrig bleibt. Dieses Dokument wird `about:srcdoc` als Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die im `src`-Attribut angegebene URL zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weitverbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Betrag an Platz in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Betrag an Platz in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Scrollleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als seine Dimensionen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Niemals eine Scrollleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gehosteten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Frames aus kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz zum übergeordneten Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Eine Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## `error`- und `load`-Ereignisverhalten

Die `error`- und `load`-Ereignisse, die bei `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu erforschen. Aus Sicherheitsgründen lösen Benutzeragenten daher nicht das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, auch wenn das `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um herauszufinden, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, besonders bei Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: das Einbetten von Inhalten einer anderen Seite. Zum Beispiel sind die Live-Demonstration selbst und das [Ausprobieren](#try_it) oben beide `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Website.

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

{{ EmbedLiveSample('A_simple_iframe', 640,400)}}

### Einbetten von Quellcode in ein `<iframe>`

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn der `sandbox`-Attribut verwendet wird.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` explizit als Basis-URL angeben.

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

So schreiben Sie Escape-Sequenzen bei Verwendung von `srcdoc`:

- Schreiben Sie zunächst das HTML auf, wobei Sie alles escapen, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren im `srcdoc`-Attribut dasselbe Zeichen. Deshalb ersetzen Sie, um es in der HTML-Dokumentation tatsächlich als Escape-Sequenz darzustellen, alle Kaufmännischen Und-Zeichen (`&`) mit `&amp;`. Beispielsweise wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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

- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
