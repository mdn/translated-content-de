---
title: "`<iframe>` HTML Inline-Frame-Element"
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<iframe>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert ein verschachteltes {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine weitere HTML-Seite in die aktuelle ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhte Speicherkapazitäten und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber achten Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Erlaubnisrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (zum Beispiel der Zugriff auf Mikrofon, Kamera, Batterie, Web-Share, etc.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Erlaubnisrichtlinie ist eine zusätzliche Einschränkung zu der im {{httpheader("Permissions-Policy")}}-Header spezifizierten Richtlinie. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufruf der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Ist auf `true` gesetzt, wenn ein cross-origin `<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die Quelle des `<iframe>`s gesendet werden sollten. Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldedaten zu machen, was bedeutet, dass sein Inhalt in einem neuen, ephemeren Kontext geladen wird. Es hat keinen Zugang zu Netzwerk-, Cookie- und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des Dokuments auf oberster Ebene ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Fremddokumente einbetten können, die dies nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine für die eingebettete Ressource durchgesetzte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP). Weitere Details finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : lädt das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögern des Ladens des iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Das Ziel ist es, den Netzwerk- und Speicherkapazitäten erforderlichen Bandbreitenbedarf zum Abrufen des Rahmens zu vermeiden, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten Anwendungsfällen, insbesondere indem die ursprüngliche Ladezeit der Seite reduziert wird.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent das verzögerte Laden unterstützt, wenn das Skripting deaktiviert ist, wäre es dennoch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem die iframes strategisch im Markup einer Seite platziert werden, um eine Serveranzahl zu verfolgen, wie viele iframes angefordert werden und wann.

- `name`
  - : Ein ansteuerbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder der `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open) Methode. Darüber hinaus wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Enthält eine Stringdarstellung eines Optionsobjekts, das eine [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) Operation darstellt; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Dictionary [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) Eigenschaft. IFrames, die dieses Attribut enthalten, können Operationen wie das Ausstellen oder Einlösen von Tokens initiieren, wenn ihre eingebetteten Inhalte geladen werden.

- `referrerpolicy`
  - : Gibt an, welcher [referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Rahmens gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "origin")}}-Seiten ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "host")}} und {{Glossary("port", "port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen im gleichen Ursprung werden weiterhin den Pfad enthalten.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default)
      - : Eine vollständige URL senden, wenn eine Same-Origin-Anfrage ausgeführt wird, nur den Ursprung senden, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer beinhaltet den Ursprung _und_ den Pfad (aber nicht den [fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [password](/de/docs/Web/API/HTMLAnchorElement/password), oder [username](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Steuert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen zu übernehmen, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzerinteraktion initiierte.
    - `allow-forms`
      - : Erlaubt es der Seite, Formulare einzureichen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt es der Seite, modale Fenster zu öffnen durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} ist erlaubt, unabhängig von diesem Schlüsselwort. Es erlaubt der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource die [Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt es der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (erstellt zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktion stillschweigend fehlschlagen.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandbox-Flags darauf anzuwenden. Dies wird es erlauben, beispielsweise eine Drittanbieteranzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verweist. Wenn dieses Flag nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen unterliegen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Embedding-Seiten Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer an der {{Glossary("same-origin_policy", "Same-Origin-Policy")}} scheitert (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein Eltern-Dokument mit demselben Ursprung trotzdem auf das DOM des iframes zugreifen und damit interagieren, auch wenn `allow-scripts` nicht gesetzt ist. Das `allow-scripts`-Token steuert nur die Skriptausführung innerhalb des eingebetteten Browsing-Kontexts und beeinflusst nicht den DOM-Zugriff vom Elternteil.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource die oberste Browsing-Ebene (die, die `_top` genannt wird) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource die oberste Browsing-Ebene navigieren, jedoch nur, wenn sie durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http` Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, ist es **stark abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da das eingebettete Dokument das `sandbox`-Attribut entfernen kann — was es nicht sicherer macht, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — z.B. wenn der Betrachter den Rahmen in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn der Benutzer umgeleitet wird, ein Popup-Fenster öffnet oder einen neuen Tab von einer eingebetteten Seite innerhalb eines `<iframe>` öffnet, das das `sandbox`-Attribut besitzt, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — beispielsweise, wenn eine Seite innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` -Attribut gesetzt ist, eine neue Seite in einem separaten Tab öffnet, wird das Formular in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die sich an die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) hält. Beachten Sie auch, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Rahmen Firefox (ab Version 65), in Chromium-basierten Browsern und in Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie z.B. Ankerlinks.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständiges HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags, etc. beinhaltet, obwohl die meisten von ihnen weggelassen werden können und nur der Hauptinhalt übrig bleibt. Dieses Dokument wird `about:srcdoc` als seinen Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie z.B. Ankerlinks.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu kontrollieren.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Rahmeninhalts. Aufgrund häufiger Missbräuche ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wenn der Browser eine Scrollleiste für den Rahmen bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer ist als seine Abmessungen.
    - `ja`
      - : Immer eine Scrollleiste anzeigen.
    - `nein`
      - : Niemals eine Scrollleiste anzeigen.

## Scripting

Inline-Frames wie {{HTMLElement("frame")}} Elemente sind in dem [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der eingebetteten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Frames aus kann ein Skript eine Referenz auf sein Elternfenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können nicht auf die meisten Eigenschaften in anderen `window` Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Elternteil des Frames zugreifen.
Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Navigation auf oberster Ebene in Cross-Origin-Frames

Skripte, die in einem Same-Origin-Frame ausgeführt werden, können die [`Window.top`](/de/docs/Web/API/Window/top) Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) einstellen, um die oberste Seite an einen neuen Ort weiterzuleiten.
Dieses Verhalten wird als "Top Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur dann mit `top` weiterleiten, wenn der Rahmen {{Glossary("sticky_activation", "sticky activation")}} hat.
Wenn eine Navigation auf oberster Ebene blockiert ist, können Browser entweder um Benutzerberechtigungen zur Umleitung bitten oder den Fehler in der Entwickler-Konsole melden (oder beides).
Diese Beschränkung durch Browser wird als _Framebusting Intervention_ bezeichnet.
Das bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort weiterleiten kann — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandboxed Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Berechtigungen zur Top-Navigation vererbt werden, sodass ein verschachtelter Frame nur dann eine Top-Navigation ausführen kann, wenn seine Eltern-Frames dies ebenfalls dürfen.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Wirkung auf `<iframe>`-Elemente.

## `error`- und `load`-Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks abzutasten. Daher lösen Benutzeragenten als Sicherheitsvorkehrung das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis auf `<iframe>` nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit assistiver Technologie wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere bei Seiten mit mehreren `<iframe>`s und/oder wenn eingebettete interaktive Inhalte wie Video oder Audio enthalten sind.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: zum Einbetten von Inhalten einer anderen Seite. Zum Beispiel sind das Live-Beispiel selbst und das [probiere es aus](#try_it) Beispiel an der Spitze, beide `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Seite.

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

### Einbettung von Quellcode in ein \<iframe>

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skript-Injektionen beim Anzeigen von nutzergenerierten Inhalten zu verhindern, wenn in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass bei der Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt zeigen, müssen Sie ausdrücklich `about:srcdoc` als Basis-URL angeben.

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

So schreiben Sie Escape-Sequenzen bei der Verwendung von `srcdoc`:

- Schreiben Sie zuerst das HTML aus, und maskieren Sie alles, was Sie in einem normalen HTML-Dokument maskieren würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` repräsentieren exakt dasselbe Zeichen im `srcdoc`-Attribut. Daher, um es zu einem tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Unds (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;` in diesem Schritt nicht zu `&amp;quot;` wird.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
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
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
