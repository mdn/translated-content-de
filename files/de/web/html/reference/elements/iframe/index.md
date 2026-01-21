---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 929f6a4afa23a47036da5e8f6a09898a2cce9929
---

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element stellt einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar und bettet eine andere HTML-Seite in die aktuelle Seite ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird der _übergeordnete Browsing-Kontext_ genannt. Der _oberste_ Browsing-Kontext — der ohne Übergeordneten — ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten; achten Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` verfügbar sind (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Berechtigungsrichtlinie stellt eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header spezifizierten Richtlinie dar. Sie ersetzt sie nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus aktivieren kann, indem die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und neu definiert als `allow="fullscreen *"`.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` gesetzt, wenn ein cross-origin `<iframe>` in der Lage sein sollte, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und neu definiert als `allow="payment *"`.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein Boolean-Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollten. Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherungsdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, so dass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Details finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standardwert ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Ladet das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht hat, wie vom Browser definiert.
        Die Absicht ist, das Netzwerk und die Speicherkapazität, die zum Abrufen des Rahmens erforderlich sind, nicht zu nutzen, bis der Browser vernünftigerweise sicher ist, dass es benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Ladezeiten.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente; dem `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder dem `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden. Zusätzlich wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Enthält eine string-Darstellung eines Optionsobjekts, das einen [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using)-Vorgang repräsentiert; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Wörterbuchs [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken)-Eigenschaft. IFrames, die dieses Attribut enthalten, können Vorgänge wie das Ausgeben oder Einlösen von Token initiieren, wenn ihr eingebetteter Inhalt geladen ist.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Rahmens abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standardmäßig)
      - : Eine vollständige URL beim Ausführen einer gleichartigen Ursprungsanfrage senden, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`
  - : Steuert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen zu aktivieren, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [Download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie durch die Navigation, die zu einem Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabeüberprüfung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen, zum Beispiel durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Ermöglicht es der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popupfenster (erstellt zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt es einem sandbekten Dokument, einen neuen Browsing-Kontext zu öffnen, ohne dass die Sandbox-Flags darauf angewendet werden. Dies ermöglicht zum Beispiel, dass eine Drittanbieter-Werbung sicher in einem Sandkasten eingebettet wird, ohne dass die gleichen Einschränkungen auf die Seite angewendet werden, auf die die Werbung verlinkt ist. Wenn dieses Flag nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>` unterliegen.
    - `allow-presentation`
      - : Erlaubt es den Embeddern, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der stets die {{Glossary("same-origin_policy", "gleichartige Ursprungsrichtlinie")}} fehlschlägt (möglicherweise wird der Zugriff auf [Datenstorage/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein gleichartiges übergeordnetes Dokument immer noch auf das DOM des iframes zugreifen und damit interagieren, selbst wenn `allow-scripts` nicht gesetzt ist. Das `allow-scripts`-Token kontrolliert nur die Skriptausführung innerhalb des eingebetteten Browsing-Kontextes und beeinflusst nicht den DOM-Zugriff vom übergeordneten Dokument.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt ein Dokument, das im `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Ermöglicht es der Ressource, den obersten Browsing-Kontext (den, der `_top` genannt wird) zu navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht es der Ressource, den obersten Browsing-Kontext zu navigieren, jedoch nur, wenn es durch eine Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht `http` Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die Einbettungsseite hat, wird es **stark abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht als das `sandbox`-Attribut gar nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines gesandbakten `<iframe>` darstellen kann — wie wenn der Betrachter den Rahmen in einem neuen Tab öffnet. Solche Inhalte sollten ebenfalls von einem _separaten Ursprung_ bedient werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten der Benutzer, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs aus einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext den gleichen `sandbox`-Einschränkungen. Dies kann zu Problemen führen — zum Beispiel, wenn eine Seite, die in einem `<iframe>` ohne gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut eingebettet ist, eine neue Site in einem separaten Tab öffnet, wird die Formularübermittlung in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [gleichartigen Ursprungsrichtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `<iframe>`-src-Attributs (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS dazu führt, dass `about:blank` im Rahmen geladen wird.

    > [!NOTE]
    > Die Seite `about:blank` verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `srcdoc`
  - : Inline-HTML, das eingebettet wird und das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, zu dem die Doctype-Direktive, `<html>`, `<body>`-Tags, usw. gehören, obwohl die meisten davon ausgelassen werden können, sodass nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Der Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu kontrollieren.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Rahmensinhalts. Aufgrund weitverbreiteter Fehlanwendung ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Grenzen.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Grenzen.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Scrollleiste für den Rahmen bereitstellen soll:
    - `auto`
      - : Nur, wenn der Inhalt des Rahmens größer ist als seine Abmessungen.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Niemals eine Scrollleiste anzeigen.

## Scripting

Inline-Frames, ähnlich wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames)-Pseudo-Array enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz auf sein übergeordnetes Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Rahmens unterliegt der [gleichartigen Ursprungsrichtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich von Skripten innerhalb eines Rahmens, die auf das übergeordnete Rahmen zugreifen.
Cross-Origin-Kommunikation kann durch die Verwendung der Methode [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem gleichartigen Rahmen ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top) Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite auf eine neue Position umzuleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame kann die oberste Seite nur mit `top` umleiten, wenn der Rahmen {{Glossary("sticky_activation", "sticky activation")}} hat.
Wenn die oberen Navigation blockiert ist, zeigen die Browser möglicherweise entweder eine Benutzererlaubnis zum Umleiten an oder berichten den Fehler in der Entwicklerkonsole (oder beides).
Diese Einschränkung durch Browser wird als _Framebusting-Intervention_ bezeichnet.
Das bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandgekastetes Frame blockiert alle Top-Navigationen, es sei denn, die Werte des `sandbox`-Attributs sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Top-Navigationsberechtigungen vererbt werden, sodass ein verschachtelter Rahmen nur dann eine Top-Navigation durchführen kann, wenn auch seine übergeordneten Frames dazu berechtigt sind.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetze Element")}} ermöglicht es das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden könnten, könnten verwendet werden, um die URL-Space-Explorer eines lokalen Netzwerks zu prüfen. Aus Sicherheitsgründen lösen Benutzeragenten daher nicht das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis auf `<iframe>`s aus, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, auch wenn der `<iframe>`-Inhalt nicht geladen wird.

## Barrierefreiheit

Personen, die mit Hilfstechnologie wie einem Screenreader navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines `<iframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt kurz und bündig beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` hinein navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere auf Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein grundlegendes `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: Inhalte von einer anderen Seite einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [try it](#try_it)-Beispiel oben beides `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Website.

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

### Quellcode in einem `<iframe>` einbetten

In diesem Beispiel wird Quellcode direkt in einem iframe gerendert. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn Benutzergenerierte Inhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

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

Hier erfahren Sie, wie Sie Escape-Sequenzen bei der Verwendung von `srcdoc` schreiben:

- Schreiben Sie zuerst das HTML heraus, wobei Sie alles maskieren, was Sie in einem normalen HTML-Dokument maskieren würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Unds (&) durch `&amp;`. Zum Beispiel wird aus `&lt;` `&amp;lt;`, und `&amp;` wird `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (") durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht `&amp;quot;` wird.

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
          >Phraseninhalt</a
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
- [Privacy, permissions, and information security](/de/docs/Web/Privacy)
