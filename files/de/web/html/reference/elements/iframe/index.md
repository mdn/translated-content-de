---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: da2d33b62be6362222d83dae5ce1f381d263a51c
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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Session-Historie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window) Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, benötigt jedes `<iframe>` auf einer Seite erhöhten Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, überprüfen Sie jedoch mögliche Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share etc.) basierend auf der Herkunft der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie stellt eine zusätzliche Einschränkung zur in der {{httpheader("Permissions-Policy")}} Header angegebenen Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut gilt als ein veraltetes Attribut und wurde als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` gesetzt, wenn einem cross-origin `<iframe>` erlaubt sein soll, die Verwendung der [Zahlungsanforderungs-API](/de/docs/Web/API/Payment_Request_API) zu initiieren.

    > [!NOTE]
    > Dieses Attribut gilt als ein veraltetes Attribut und wurde als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Siehe [Verwendung der Themen-API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` credentialsfrei zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seiner Herkunft assoziiert sind. Es verwendet einen neuen Kontext, der lokal zur Lebenszeit des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, so dass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource erzwungen wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Das Ziel ist es, die Netzwerk- und Speicherbandbreite zu sparen, die erforderlich ist, um das Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass es benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten Anwendungsfällen, insbesondere durch die Reduzierung der anfänglichen Seitenladezeiten.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} Elemente verwendet werden; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder im `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open) Methode. Darüber hinaus wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, die eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.

- `privateToken` {{experimental_inline}}
  - : Enthält eine String-Darstellung eines Optionsobjekts, das eine [private State Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation darstellt; dieses Objekt hat die gleiche Struktur wie die `RequestInit` Wörterbuchs [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) Eigenschaft. IFrames mit diesem Attribut können Operationen wie das Ausgeben oder Einlösen von Tokens initiieren, wenn ihr eingebetteter Inhalt geladen ist.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des iframes gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Herkünfte")}} gesendet, die kein {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) verwenden.
    - `origin`
      - : Der gesendete Referrer wird auf die Herkunft der referenzierenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Herkünfte gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigierungen auf der gleichen Herkunft enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Herkunft")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Senden Sie die Herkunft des Dokuments nur als Referrer, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei einer Anfrage innerhalb derselben Herkunft, senden Sie nur die Herkunft, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält die Herkunft _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Herkünfte und Pfade von TLS-geschützten Ressourcen an unsichere Herkünfte leakt.

- `sandbox`
  - : Steuert die Einschränkungen des im `<iframe>` eingebetteten Inhalts. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Token, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder es durch JS-Code ohne Benutzerinteraktion initiiert wurde.
    - `allow-forms`
      - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden wird weder die Eingabevalidierung auslösen, Daten an einen Webserver senden noch einen Dialog schließen.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von Modalfenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch das Empfangen von [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent).
    - `allow-orientation-lock`
      - : Ermöglicht der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Ermöglicht Popups (erstellt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht es einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf anzuwenden. Dies erlaubt es beispielsweise, eine Drittanbieter-Anzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verweist. Wenn dieses Flag nicht enthalten ist, unterliegt eine weitergeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das ursprungs `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht Einbettenden die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einer speziellen Herkunft betrachtet, die immer die {{Glossary("same-origin_policy", "same-origin policy")}} nicht besteht (möglicherweise wird der Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist dies nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Ermöglicht der Ressource die Navigation im obersten Browsing-Kontext (demjenigen, der als `_top` bezeichnet wird).
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht der Ressource die Navigation im obersten Browsing-Kontext, jedoch nur, wenn dies durch eine Benutzerinteraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Ermöglicht Navigierungen zu Nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument die gleiche Herkunft hat wie die einbettende Seite, ist es **stark abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument erlaubt, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch aus einer _separaten Herkunft_ bereitgestellt werden, um potenzielle Schäden zu begrenzen.

    > [!NOTE]
    > Wenn Sie den Benutzer weiterleiten, ein Popup-Fenster öffnen oder eine neue Registerkarte von einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem `sandbox`-Attribut öffnen, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, wird das Formular in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die mit der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) übereinstimmt. Beachten Sie auch, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` in das Frame geladen wird in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn sie relative URLs auflöst, wie z.B. Anker-Links.

- `srcdoc`
  - : Eingebettetes HTML, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>` Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können, so dass nur der Inhalt des Körpers übrig bleibt. Dieses Dokument wird `about:srcdoc` als seinen Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn sie relative URLs auflöst, wie z.B. Anker-Links.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Der Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um dieses Frame. Der Wert `0` entfernt den Rahmen um dieses Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>` Rahmen zu kontrollieren.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser für das Frame eine Scrollleiste bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Keine Scrollleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}} Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft verweist auf das `document` innerhalb des `<iframe>`, gleich wie `contentWindow.document`.

Innerhalb eines Frames kann sich ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) auf sein Hauptfenster beziehen.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können auf die meisten Eigenschaften in anderen `window` Objekten nicht zugreifen, wenn das Skript von einer anderen Herkunft geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Hauptfenster des Frames zugreifen.
Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem Same-Origin-Frame ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top) Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite auf eine neue Position umzuleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur dann mithilfe von `top` umleiten, wenn der Frame {{Glossary("sticky_activation", "sticky activation")}} hat.
Wenn die Top-Navigation blockiert ist, können Browser entweder eine Benutzererlaubnis zum Weiterleiten anfordern oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Einschränkung durch Browser wird als _framebusting intervention_ bezeichnet.
Das bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis zur Weiterleitung erteilt haben.

Ein sandboxed Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Berechtigungen zur Top-Navigation vererbt werden, so dass ein verschachtelter Frame eine Top-Navigation nur ausführen kann, wenn auch seine übergeordneten Frames dazu befugt sind.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mittels der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keinen Einfluss auf `<iframe>` Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgeführt werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks zu sondieren. Aus Sicherheitsgründen lösen Benutzeragenten das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis bei `<iframe>`s nicht aus; das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird jedoch immer ausgelöst, selbst wenn der `<iframe>` Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit assistiven Technologien wie einem Bildschirmleser navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) in einem `<iframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontexwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: Inhalte von einer anderen Seite einzubetten. Zum Beispiel ist das Live-Beispiel selbst sowie das [try it](#try_it) Beispiel oben, beide `<iframe>` Einbettungen von Inhalten von einer anderen MDN-Seite.

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

### Einbettung von Quellcode in einem `<iframe>`

Dieses Beispiel zeigt direkt Quellcode in einem iframe an. Dies kann als Technik zur Verhinderung von Skriptinjektionen beim Anzeigen von benutzergenerierten Inhalten verwendet werden, wenn es mit dem `sandbox`-Attribut kombiniert wird.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

- Schreiben Sie zuerst das HTML niederschriftlich, indem Sie alles entkommen, das Sie in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&`, usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc` Attribut. Um es daher zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jedes kaufmännische Und (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc` Attribut vorzeitig beendet wird (wenn Sie `'` statt `"` verwenden, dann sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wurde, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Leitfäden/Inhaltskategorien"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Leitfäden/Inhaltskategorien#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Leitfäden/Inhaltskategorien#phrasing_content"
          >Phrasierungsinhalte</a
        >, eingebettete Inhalte, interaktive Inhalte, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Wechsel</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Referenz/Rollen/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Referenz/Rollen/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Referenz/Rollen/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Referenz/Rollen/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Referenz/Rollen/presentation_role"><code>presentation</code></a>
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

- [CSP: frame-ancestors](/de/docs/Web/HTTP/Referenz/Headers/Content-Security-Policy/frame-ancestors)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
