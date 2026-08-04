---
title: "`<iframe>` HTML Inline-Frame-Element"
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung darstellt, benötigt jedes `<iframe>` auf einer Seite erhöhte Speicherkapazität und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, prüfen Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `allow`
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` verfügbar sind (zum Beispiel Zugriff auf das Mikrofon, die Kamera, die Batterie, Web-Sharing usw.) basierend auf dem Ursprung der Anfrage.

    Beispiele finden Sie unter [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy`.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Permissions Policy stellt eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` setzen, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` setzen, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>`s gesendet werden sollen.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, wird das `<iframe>` ohne Anmeldeinformation, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies oder Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext lokal zur Lebensdauer des obersten Dokuments. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Weitere Einzelheiten finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource erzwungen wird. Einzelheiten finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standardwert ist `150`.

- `loading`
  - : Gibt an, wann der Browser das `<iframe>` laden soll:
    - `eager`
      - : Lädt das `<iframe>` sofort beim Seitenaufruf (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des `<iframe>`, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert. Die Absicht besteht darin, das Netzwerk und die Speicherbandbreite, die zum Abrufen des Rahmens erforderlich sind, nicht zu verwenden, bis der Browser vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Seitenladezeiten.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, weil, wenn ein Benutzeragent verzögertes Laden unterstützte, wenn Skripting deaktiviert ist, es trotzdem möglich wäre, dass eine Seite die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgt, indem strategisch iframes im Markup der Seite platziert werden, so dass ein Server nachverfolgen kann, wie viele iframes angefordert werden und wann.

- `name`
  - : Ein ansprechbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder im `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden. Zusätzlich wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document)-Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Enthält eine string-Darstellung eines Optionsobjekts, das einen Vorgang mit einem [private state token](/de/docs/Web/API/Private_State_Token_API/Using) darstellt; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Diktionäreigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken). IFrames mit diesem Attribut können Operationen wie das Ausgeben oder Einlösen von Token einleiten, wenn ihr eingebetteter Inhalt geladen ist.

- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Rahmens gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung umfassen weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Anfragen mit verschiedenen Ursprüngen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet den Ursprung des Dokuments als Referrer nur, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL bei der Durchführung einer Anfrage im gleichen Ursprung, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`
  - : Steuert die Beschränkungen, die auf den im `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Beschränkungen anzuwenden, oder durch Leerzeichen getrennte Token enthalten, um bestimmte Beschränkungen aufzuheben:
    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut sowie über die Navigation, die zu einem Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Ermöglicht der Seite das Senden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von Modal-Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch den Empfang des [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisses.
    - `allow-orientation-lock`
      - : Ermöglicht der Ressource das [Sperren der Bildschirmausrichtung](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Ermöglicht Pop-ups (die zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"` erstellt werden). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht einem sandboxed Dokument das Öffnen eines neuen Browsing-Kontexts, ohne die Sandboxing-Flags darauf zu erzwingen. Dies ermöglicht zum Beispiel, dass eine Drittanbieter-Anzeige sicher in einem Sandbox-Modus angezeigt wird, ohne dass dieselben Einschränkungen auf die Seite angewendet werden, zu der die Anzeige verlinkt. Wenn diese Markierung nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Beschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht Einbettungen zu kontrollieren, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wird dieses Token nicht verwendet, wird die Ressource als eine Sonderherkunft betrachtet, die immer an der {{Glossary("same-origin_policy", "gleichen Ursprungsrichtlinie")}} scheitert (möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindernd).

        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein gleichartiges übergeordnetes Dokument immer noch auf das DOM des iframes zugreifen und damit interagieren, selbst wenn `allow-scripts` nicht gesetzt ist. Das `allow-scripts`-Token kontrolliert nur die Skriptausführung im eingebetteten Browsing-Kontext und beeinflusst nicht den DOM-Zugriff des übergeordneten Dokuments.

    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt ein im `<iframe>` geladenes Dokument die Nutzung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts (desjenigen, der als `_top` benannt ist).
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts, aber nur, wenn dies durch eine Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http` Protokollen, die im Browser eingebaut sind oder [von einer Webseite registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, wird dringend davon abgeraten, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox` Attribut zu entfernen — wodurch es nicht sicherer ist als die Nichtverwendung des `sandbox` Attributs.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — beispielsweise, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten ebenfalls von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Bei der Weiterleitung des Benutzers, dem Öffnen eines Popup-Fensters oder dem Öffnen eines neuen Tabs von einer auf einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem Attribut `sandbox` wird der neue Browsing-Kontext denselben `sandbox`-Beschränkungen unterzogen. Dies kann Probleme hervorrufen — zum Beispiel, wenn eine Seite innerhalb eines `<iframe>`s ohne gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut darauf eine neue Seite in einem separaten Tab öffnet, schlägt die Formularübermittlung in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`
  - : Die URL der Seite zum Einbetten. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die sich an die [Sicherheitspolitik desselben Ursprungs](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) hält. Beachten Sie auch, dass das Entfernen eines `<iframe>`-`src`-Attributs programmgesteuert (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Browsern auf Chromium-Basis und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Anker-Links, aufgelöst werden.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments entsprechen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. umfasst, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt bleibt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Anker-Links, aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie in neuem Inhalt nicht verwenden und versuchen, sie aus bestehendem Inhalt zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um dieses Frame. Der Wert `0` entfernt den Rahmen um dieses Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Rahmeninhalts. Aufgrund weitverbreiteten Missbrauchs ist dies nicht hilfreich für nicht-visuelle Browser.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Rahmeninhalts und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Rahmeninhalts und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser für das Frame eine Bildlaufleiste bereitstellen soll:
    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als dessen Abmessungen ist.
    - `yes`
      - : Bildlaufleiste immer anzeigen.
    - `no`
      - : Bildlaufleiste nie anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` im `<iframe>`, gleich wie `contentWindow.document`.

Vom Inneren eines Frames kann ein Skript über [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz zu seinem übergeordneten Fenster erhalten.

Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Element zugreifen. Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem Frame mit demselben Ursprung ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top)-Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite an einen neuen Ort umzuleiten. Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur umleiten, wenn der Frame über eine {{Glossary("sticky_activation", "Sticky Activation")}} verfügt. Wenn eine Top-Navigation blockiert ist, können Browser entweder um die Erlaubnis des Benutzers bitten, um die Seite umzuleiten, oder den Fehler in der Entwicklerkonsole melden (oder beides). Diese Einschränkung durch Browser wird _Framebusting Intervention_ genannt. Dies bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Erlaubnis erteilt haben, umzuleiten.

Ein sandboxed Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt. Beachten Sie, dass Top-Navigation-Berechtigungen vererbt werden, sodass ein verschachtelter Frame nur dann eine Top-Navigation durchführen kann, wenn seine übergeordneten Frames dies ebenfalls dürfen.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>` die Anpassung der Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkung auf `<iframe>`-Elemente.

## `Fehler`- und `Laden`-Ereignisverhalten

Die `Fehler`- und `Laden`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der lokalen Netzwerk-HTTP-Server zu sondieren. Daher lösen Benutzeragenten als Sicherheitsmaßnahme nicht das [Fehler](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus, und das [Laden](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Reaktionsfähige `<iframe>`-Größenanpassung

Aus Sicherheits- und Datenschutzgründen geben `<iframe>`-Elemente standardmäßig keine Informationen über die Größe des Inhalts im Dokument, das sie einbetten, an das übergeordnete Dokument preis.

Um die reaktionsfähige Größenanpassung von `<iframe>`-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann der Tag [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) in ein eingebettetes Dokument aufgenommen werden, um es einzuwilligen, die Größeninformationen mit dem übergeordneten Dokument zu teilen. Die {{cssxref("frame-sizing")}} CSS-Eigenschaft kann dann auf das `<iframe>` gesetzt werden, damit es die gleiche horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments annimmt. Dies stellt sicher, dass `<iframe>`-Inhalte nahtlos in ihrer Einbetzung passen und unnötige Bildlaufleisten vermieden werden.

Um die Größe des `<iframe>` dynamisch anzupassen, wenn sich das eingebettete Dokument in der Layoutgröße ändert, können Sie die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) vom eingebetteten Dokument aus aufrufen, um eine aktualisierte Größe zu melden.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, wie zum Beispiel ein Bildschirmlesegerät, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist eine übliche Verwendungsweise von iframes: um Inhalte von einer anderen Seite einzubetten. Beispielsweise sind die Live-Demonstration selbst und das [probieren Sie es aus](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Site.

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

{{ EmbedLiveSample('A_basic_iframe', 640, 400)}}

### Einbetten von Quellcode in ein \<iframe>

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn von Benutzern generierte Inhalte angezeigt werden, wenn sie mit dem `sandbox`-Attribut kombiniert werden.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` explizit als Basis-URL angeben.

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

Hier wird gezeigt, wie Escape-Sequenzen beim Verwenden von `srcdoc` geschrieben werden:

- Schreiben Sie zuerst das HTML aus, wobei Sie alles entschärfen, was Sie in einem normalen HTML-Dokument entschärfen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` stellen im `srcdoc`-Attribut genau dasselbe Zeichen dar. Um daraus also eine echte Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

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
          >Phrasinhalte</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind verpflichtend.</td>
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
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
