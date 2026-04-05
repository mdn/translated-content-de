---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 743ba8b257cd06449b192818df120e609f6e16d2
---

Das **`<iframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine weitere HTML-Seite in die aktuelle ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-basiertes Navigieren. Die Navigationshistorie jedes eingebetteten Browsing-Kontexts wird linearisiert in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts. Der Browsing-Kontext, der die anderen einbettet, wird _übergeordneter Browsing-Kontext_ genannt. Der _oberste_ Browsing-Kontext — derjenige ohne übergeordneten Kontext — ist üblicherweise das Browserfenster, repräsentiert durch das [`Window`](/de/docs/Web/API/Window) Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung darstellt, erfordert jedes `<iframe>` auf einer Seite mehr Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie mögliche Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (z.B. Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Abschnitt `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Permissions-Policy stellt eine zusätzliche Einschränkung gegenüber der im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Wird auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wurde neu definiert als `allow="fullscreen *"`.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Wird auf `true` gesetzt, wenn ein cross-origin `<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wurde neu definiert als `allow="payment *"`.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn vorhanden, spezifiziert, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}
  - : Wird auf `true` gesetzt, um das `<iframe>` ohne Berechtigungsnachweise zu machen, was bedeutet, dass dessen Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und gespeicherte Daten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die das nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Weitere Details finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Das iframe wird sofort beim Laden der Seite geladen (dies ist der Standardwert).
    - `lazy`
      - : Das Laden des iframes wird verzögert, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie es der Browser definiert. Ziel ist es, Netzwerk- und Speicherkapazitäten zu schonen, die benötigt werden, um das Frame abzurufen, bis der Browser mit ziemlicher Sicherheit weiß, dass es benötigt wird. Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Seitenladezeiten.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent lazy loading unterstützen würde, wenn Skripting deaktiviert ist, wäre es dennoch möglich, dass eine Seite die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgt, indem sie strategisch iframes im Markup einer Seite platziert, sodass ein Server nachverfolgen kann, wie viele iframes angefordert werden und wann.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} Elemente verwendet werden; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder im `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open) Methode. Zusätzlich wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, welche eine Referenz auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Enthält eine Zeichenkettenrepräsentation eines Optionsobjekts, das eine [private state token](/de/docs/Web/API/Private_State_Token_API/Using) Operation repräsentiert; dieses Objekt hat die gleiche Struktur wie die `privateToken` Eigenschaft des `RequestInit` Dictionaries. IFrames, die dieses Attribut enthalten, können Operationen wie das Ausgeben oder Einlösen von Tokens initiieren, wenn ihr eingebetteter Inhalt geladen ist.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der referenzierenden Seite beschränkt: ihr [Protokoll](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Protokoll, den Host und den Port beschränkt. Navigationen im selben Ursprung werden dennoch den Pfad enthalten.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiches Herkunftsprinzip")}} gesendet, aber cross-origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber es nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Eine vollständige URL senden, wenn eine same-origin Anfrage durchgeführt wird, nur den Ursprung senden, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad einschließen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sandbox`
  - : Kontrolliert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien durch ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [Download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzereingriff initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Übermitteln von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Abschicken wird keine Eingabeverifizierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen mit [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, das Event [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) zu empfangen.
    - `allow-orientation-lock`
      - : Erlaubt es der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (erstellt zum Beispiel von [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem in einer Sandbox eingeschlossenen Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf zu erzwingen. Dies ermöglicht es zum Beispiel, dass ein Drittanbieter-Anzeigen sicher in einer Sandbox eingeschlossen werden kann, ohne die gleichen Einschränkungen auf die Seite, die die Anzeige verlinkt, zu erzwingen. Wenn diese Flagge nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>` unterworfen.
    - `allow-presentation`
      - : Erlaubt den Embeddern, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung starten](/de/docs/Web/API/PresentationRequest) kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung kommend behandelt, der immer das {{Glossary("same-origin_policy", "gleiche Herkunftsprinzip")}} verletzt (was potenziell den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindern kann).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein same-origin übergeordnetes Dokument trotzdem auf das DOM des iframes zugreifen und damit interagieren, selbst wenn `allow-scripts` nicht gesetzt ist. Das `allow-scripts` Token kontrolliert nur die Skriptausführung im eingebetteten Browsing-Kontext und beeinflusst nicht den DOM-Zugriff vom übergeordneten Dokument aus.

    - `allow-scripts`
      - : Erlaubt es der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem in einem `<iframe>` geladenen Dokument, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt es der Ressource, den obersten Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt es der Ressource, den obersten Browsing-Kontext zu navigieren, aber nur, wenn dies durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http` Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **stark davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument erlaubt, das `sandbox` Attribut zu entfernen — was es nicht sicherer macht, als gar kein `sandbox` Attribut zu verwenden.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines in einer Sandbox eingeschlossenen `ifram`e anzeigen kann — wie wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn der Benutzer weitergeleitet wird, ein Popup-Fenster geöffnet wird oder ein neuer Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox` Attribut geöffnet wird, unterliegt der neue Browsing-Kontext denselben `sandbox` Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine innerhalb eines `<iframe>` eingebettete Seite ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut darin eine neue Seite in einem separaten Tab öffnet, wird das Formularsenden in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die mit der [gleiche Herkunftsprinzip](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) konform ist. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `src` Attributs eines `<iframe>`s (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chrom-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL zur Auflösung aller relativen URLs, wie Ankerlinks.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src` Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>` Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können, sodass nur der Körperinhalt übrig bleibt. Dieses Dokument wird `about:srcdoc` als seine Adresse haben. Wenn ein Browser das `srcdoc` Attribut nicht unterstützt, wird auf die URL im `src` Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL zur Auflösung aller relativen URLs, wie Ankerlinks.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuem Inhalt verwenden und versuchen, sie aus bestehendem Inhalt zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Hinblick auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um dieses Frame. Der Wert `0` entfernt den Rahmen um dieses Frame, aber stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>` Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weitverbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für das Frame bereitstellen soll:
    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripterstellung

Inline-Frames, wie {{HTMLElement("frame")}} Elemente, sind im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Vom Inneren eines Frames aus kann ein Skript eine Referenz auf sein übergeordnetes Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [gleiche Herkunftsprinzip](/de/docs/Web/Security/Defenses/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window` Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Eine cross-origin Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem same-origin Frame ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top) Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite zu einer neuen Adresse umzuleiten. Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur dann mit `top` umleiten, wenn das Frame über eine {{Glossary("sticky_activation", "sticky activation")}} verfügt. Wenn die Top-Navigation blockiert ist, können Browser entweder um Benutzererlaubnis zum Umleiten auffordern oder den Fehler in der Entwicklerkonsole melden (oder beides). Diese Beschränkung durch Browser wird als _Framebusting-Intervention_ bezeichnet. Dies bedeutet, dass ein Cross-Origin-Frame nicht sofort die oberste Seite umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis zur Umleitung erteilt haben.

Ein in einer Sandbox eingebettetes Frame blockiert alle Top-Navigationen, es sei denn, die Werte des `sandbox` Attributs sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt. Beachten Sie, dass Top-Navigationsberechtigungen vererbt werden, sodass ein verschachteltes Frame eine Top-Navigation nur durchführen kann, wenn seine übergeordneten Frames dies ebenfalls dürfen.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "Replaced Element")}} erlaubt das `<iframe>` die Positionierung des eingebetteten Dokuments innerhalb seiner Box mittels der {{cssxref("object-position")}} Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Auswirkung auf `<iframe>` Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der lokalen Netzwerks-HTTP-Server zu sondieren. Daher feuern Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis nicht auf `<iframe>`s, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, auch wenn das `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die Assistive Technologien wie Bildschirmlesegeräte verwenden, können das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontexwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Videos oder Audios enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein üblicher Anwendungsfall von iframes: Inhalte von einer anderen Seite einbetten. Zum Beispiel sind sowohl das Selbstbeispiel als auch das [Ausprobieren](#try_it) Beispiel am Anfang `<iframe>` Einbettungen von Inhalten von einer anderen MDN Seite.

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

### Einbetten von Quellcode in ein `<iframe>`

Dieses Beispiel rendert den Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skript-Injection zu verhindern, wenn Benutzergenerierten Inhalt angezeigt wird, in Kombination mit dem `sandbox` Attribut.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt zeigen, müssen Sie `about:srcdoc` ausdrücklich als Basis-URL angeben.

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

- Schreiben Sie zunächst das HTML aus und entkommen allem, was Sie auch in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren genau dasselbe Zeichen im `srcdoc`-Attribut. Um es also zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Ampersands (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;` und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` verwenden, dann sollten Sie `'` stattdessen mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wurde, nicht zu `&amp;quot;` wird.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Anfangs- als auch die Endtags sind obligatorisch.</td>
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
