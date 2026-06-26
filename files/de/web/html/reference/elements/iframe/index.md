---
title: "`<iframe>` HTML-Einbettungselement"
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

Das **`<iframe>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine weitere HTML-Seite in die aktuelle Seite einbettet.

{{InteractiveExample("HTML-Demo: &lt;iframe&gt;", "tabbed-standard")}}

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — der ohne Elternkontext — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung darstellt, erfordert jedes `<iframe>` auf einer Seite mehr Speicher und andere Computerressourcen. Obwohl Sie theoretisch so viele `<iframe>`s verwenden können, wie Sie möchten, sollten Sie auf Leistungsprobleme achten.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Features dem `<iframe>` zur Verfügung stehen (z. B. Zugriff auf Mikrofon, Kamera, Batterie, Web-Sharing usw.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie stellt eine zusätzliche Einschränkung über die im {{httpheader("Permissions-Policy")}}-Header angegebene Richtlinie dar. Es ersetzt sie nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und mit `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` gesetzt, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und mit `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die Quelle des `<iframe>` gesendet werden sollen.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicher-Daten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit festgelegtem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert. Das Ziel ist, zu vermeiden, die Netzwerk- und Speicherbandbreite zu nutzen, die zum Abrufen des Rahmens erforderlich ist, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird. Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Seitenladezeiten.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent Lazy Loading unterstützt, während das Scripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem gezielt iframes in das Markup einer Seite platziert werden, so dass ein Server nachverfolgen kann, wie viele iframes angefordert werden und wann.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}-Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder der `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Außerdem wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document)-Objekte, die eine Referenz auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Beinhaltet eine String-Darstellung eines Optionsobjekts, das eine [private state token](/de/docs/Web/API/Private_State_Token_API/Using)-Operation repräsentiert; dieses Objekt hat dieselbe Struktur wie die `RequestInit`-Diktator-Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken). IFrames mit diesem Attribut können Operationen wie das Ausgeben oder Einlösen von Token initiieren, wenn ihr eingebetteter Inhalt geladen wird.

- `referrerpolicy`
  - : Gibt an, welcher [referrer](/de/docs/Web/API/Document/referrer) gesendet wird, wenn die Ressource des Rahmens abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigieren auf demselben Ursprung wird weiterhin den Pfad beinhalten.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Eine vollständige URL senden, wenn eine Anfrage mit demselben Ursprung durchgeführt wird, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`
  - : Kontrolliert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien durch ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare einzureichen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Einreichen löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Ermöglicht der Ressource, [die Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (die zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"` erstellt wurden). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität schweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht es einem sandboxed-Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf zu erzwingen. Dies ermöglicht beispielsweise, dass eine Drittanbieter-Werbung sicher in Sandbox eingebettet wird, ohne dieselben Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verweist. Wenn diese Flagge nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Beschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungen, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung kommend behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Richtlinie")}} nicht erfüllt (was potenziell den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein Dokument mit dem gleichen Ursprung das DOM des iframes trotzdem zugreifen und mit ihm interagieren, auch wenn `allow-scripts` nicht gesetzt ist. Das Token `allow-scripts` kontrolliert nur die Skriptausführung im eingebetteten Browsing-Kontext und beeinflusst nicht den DOM-Zugriff vom Elternteil.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument, das im `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts, aber nur, wenn sie durch eine Benutzerinteraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigierungen zu nicht-`http`-Protokollen, die in einem Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, wird dringend davon abgeraten, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies es dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — es wäre dann nicht sicherer als ein `<iframe>` ohne Verwendung des `sandbox`-Attributs.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — so wie wenn der Betrachter den Rahmen in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenzielle Schäden zu begrenzen.

    > [!NOTE]
    > Bei der Umleitung des Benutzers, dem Öffnen eines Popup-Fensters oder dem Öffnen eines neuen Tabs aus einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies können Probleme verursachen — zum Beispiel, wenn eine Seite innerhalb eines `<iframe>`s ohne ein `sandbox="allow-forms"`- oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut darauf eine neue Seite in einem separaten Tab öffnet, wird das Einreichen eines Formulars in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der Seite, die eingebettet werden soll. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die mit der [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) übereinstimmt. Beachten Sie auch, dass das programmatische Entfernen eines `src`-Attributs eines `<iframe>`s (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS dazu führt, dass `about:blank` im Rahmen geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relativ URLs, wie ankergelinkte Links aufgelöst werden.

- `srcdoc`
  - : Inline-HTML, das eingebettet werden soll, überschreibt das `src`-Attribut. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`-, `<body>`-Tags usw. umfasst, obwohl die meisten weggelassen werden können, sodass nur der Hauptinhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgefallen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relativ URLs, wie ankergelinkte Links aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie in neuen Inhalten nicht verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, Sie sollten jedoch stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund eines weit verbreiteten Missbrauchs ist dies für nonvisuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Scrollleiste für den Rahmen bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Niemals eine Scrollleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, ebenso wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript eine Referenz zu seinem Elternfenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Rahmens unterliegt der [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können die meisten Eigenschaften in anderen `window`-Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Rahmens, die auf das Elternteil des Rahmens zugreifen.
Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem Frame gleichen Ursprungs laufen, können auf die [`Window.top`](/de/docs/Web/API/Window/top)-Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) festlegen, um die oberste Seite auf einen neuen Standort zu umleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur dann über `top` umleiten, wenn der Frame eine {{Glossary("sticky_activation", "Sticky-Aktivierung")}} hat.
Wenn die Top-Navigation blockiert ist, können Browser entweder um Benutzererlaubnis zur Umleitung bitten oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Einschränkung durch Browser wird _Framebusting-Intervention_ genannt.
Dies bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandboxed Frame blockiert jegliche Top-Navigation, es sei denn, die Werte des `sandbox`-Attributs sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Top-Navigationsberechtigungen vererbt werden, sodass ein verschachtelter Frame nur dann eine Top-Navigation durchführen kann, wenn auch seine übergeordneten Frames dies dürfen.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetzbares Element")}} kann das `<iframe>` die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft einstellen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<iframe>`-Elemente.

## Verhalten von `error`- und `load`-Ereignissen

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks auszukundschaften. Daher wird aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis in `<iframe>`s von Benutzeragenten nicht ausgelöst, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn die Embeds interaktiven Inhalt wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite auf <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: Inhalte von einer anderen Website einbetten. Zum Beispiel sind das Live-Beispiel selbst und das [try it](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

### Einbetten von Quellcode in ein \<iframe>

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn Benutzergenerierter Inhalt angezeigt wird, insbesondere in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der eingebetteten Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

Hier ist, wie man Escape-Sequenzen beim Gebrauch von `srcdoc` schreibt:

- Schreiben Sie zunächst das HTML aus, indem Sie alles, was Sie in einem normalen HTML-Dokument escapen würden, escapen (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Daher ersetzen Sie, um daraus eine tatsächliche Escape-Sequenz im HTML-Dokument zu machen, alle Ampersands (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie doppelte Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, damit `&quot;`, das in diesem Schritt erstellt wird, nicht zu `&amp;quot;` wird.

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
          >Syntax-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die Schluss-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten inhalt akzeptiert.</td>
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
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
