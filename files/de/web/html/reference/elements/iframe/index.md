---
title: "`<iframe>` HTML Inline-Frame-Element"
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

Das **`<iframe>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, indem es eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — der ohne Eltern — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhten Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, jedoch sollten Sie auf Leistungsprobleme achten.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` verfügbar sind (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share, etc.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie implementiert eine zusätzliche Einschränkung oberhalb der im {{httpheader("Permissions-Policy")}} Header spezifizierten Richtlinie. Sie ersetzt sie nicht.

- `allowfullscreen`
  - : Auf `true` setzen, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut angesehen und als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` setzen, wenn einem Cross-Origin-`<iframe>` erlaubt werden soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) zu verwenden.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut angesehen und als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` setzen, um das `<iframe>` ohne Anmeldedaten zu gestalten, sodass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugang zum Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es nutzt einen neuen Kontext, der lokal zur Lebensdauer des Top-Level-Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, sodass Dokumente mit COEP eingebettet werden können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für mehr Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das `<iframe>` laden soll:
    - `eager`
      - : Lädt das `<iframe>` sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des `<iframe>`, bis es eine berechnete Distanz vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Das Ziel ist es, die Nutzung des Netzwerks und die Speichernutzung zu vermeiden, die erforderlich sind, um den Rahmen zu holen, bis der Browser mit Sicherheit annimmt, dass er benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere indem die anfänglichen Ladezeiten der Seite reduziert werden.

        Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, da es, wenn ein Benutzeragent Lazy-Loading unterstützt, wenn Skripte deaktiviert sind, immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch `<iframe>`s in das Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele `<iframe>`s angefordert und wann sie angefordert werden.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder den `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Zusätzlich wird der Name zu einer Eigenschaft des [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document)-Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthalten.

- `privateToken` {{experimental_inline}}
  - : Enthält eine Zeichenfolgenrepräsentation eines Optionsobjekts, das eine [private state token](/de/docs/Web/API/Private_State_Token_API/Using)-Operation darstellt; dieses Objekt hat dieselbe Struktur wie die `RequestInit`-Dictionary-Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken). IFrames, die dieses Attribut enthalten, können Operationen initiieren, wie das Ausgeben oder Einlösen von Tokens, wenn ihr eingebetteter Inhalt geladen wird.

- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Rahmens gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer ist auf den Ursprung der verlinkenden Seite begrenzt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der gesendete Referrer zu anderen Ursprüngen wird auf das Schema, den Host und den Port begrenzt. Navigationen im selben Ursprung enthalten nach wie vor den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber sendet ihn nicht an eine weniger sichere Zielseite (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL bei einer gleichartigen Ursprungsanfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an eine weniger sichere Zielseite (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Nutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Steuert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob JS-Code dies ohne Benutzerinteraktion eingeleitet hat.
    - `allow-forms`
      - : Erlaubt der Seite das Senden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite das Öffnen modaler Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource das [Sperren der Bildschirmausrichtung](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (die beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"` erstellt werden). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität stillschweigend fehlschlagen.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument das Öffnen eines neuen Browsing-Kontextes, ohne die Sandboxing-Flags auf den neuen Kontext zu erzwingen. Dies erlaubt es beispielsweise, eine Werbung sicher einzubetten, ohne die gleichen Beschränkungen auf die Seite, auf die die Anzeige verweist, zu erzwingen. Wenn diese Flagge nicht enthalten ist, unterliegen eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Beschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt es Einbettungen, die Kontrolle darüber zu haben, ob ein `<iframe>` eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource behandelt, als käme sie von einem speziellen Ursprung, der immer gegen die {{Glossary("same-origin_policy", "gleiche Ursprungspolitik")}} fehlschlägt (was möglicherweise den Zugang zu [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einigen JavaScript-APIs verhindert).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein gleichartiges Ursprungsdokument eines Elternteils weiterhin auf das DOM des IFrames zugreifen und mit ihm interagieren, auch wenn `allow-scripts` nicht gesetzt ist. Das `allow-scripts`-Token steuert nur die Skriptausführung innerhalb des eingebetteten Browsing-Kontextes und beeinflusst nicht den DOM-Zugriff vom Elternteil.
    - `allow-scripts`
      - : Erlaubt der Seite das Ausführen von Skripten (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Aktion nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument, das im `<iframe>` geladen wird, die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um Zugang zu nicht partitionierten Cookies zu beantragen.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den oberen Browsing-Kontext (derjenige, der `_top` genannt wird) zu navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den oberen Browsing-Kontext zu navigieren, aber nur wenn dies durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigations zu nicht-`http`-Protokollen, die im Browser eingebaut sind oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Dieses Feature wird auch durch das `allow-popups` oder `allow-top-navigation`-Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **dringend davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — womit es nicht sicherer ist, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Eine Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — wie wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Umleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Beschränkungen. Dies kann Probleme schaffen — beispielsweise, wenn eine innerhalb eines `<iframe>` eingebettete Seite ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut ein neues Site in einem separaten Tab öffnet, wird das Absenden von Formularen in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [gleiche Ursprungspolitik](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `<iframe>`s `src`-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Browsern auf Chromium-Basis und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `srcdoc`
  - : Eingebettetes HTML, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. einschließt, obwohl die meisten von ihnen weggelassen werden können, so dass nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seine Location. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie in neuen Inhalten nicht verwenden und sie aus bestehenden Inhalten entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zu seinem umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, jedoch sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Die Menge des Platzes in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Die Menge des Platzes in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für den Rahmen bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer ist als seine Abmessungen.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, gleichbedeutend mit `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) einen Verweis auf das übergeordnete Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [gleiche Ursprungspolitik](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, das auf das übergeordnete Fenster zugreift.
Eine Cross-Origin-Kommunikation kann mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Navigation auf oberster Ebene in Cross-Origin-Frames

Skripte, die in einem gleichartigen Ursprungs-Frame ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top)-Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die Seite auf oberster Ebene zu einem neuen Ort umzuleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame ist nur dann berechtigt, die Seite auf oberster Ebene unter Verwendung von `top` umzuleiten, wenn der Frame {{Glossary("sticky_activation", "starke Aktivierung")}} hat.
Wenn die Top-Navigation blockiert ist, können Browser entweder um Benutzergenehmigung zum Umleiten bitten oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Beschränkung durch Browser wird als _Framebusting-Intervention_ bezeichnet.
Das bedeutet, dass ein Cross-Origin-Frame die Seite auf oberster Ebene nicht unmittelbar umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandboxed Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte werden auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass die Top-Navigationsberechtigungen vererbt werden, sodass ein verschachtelter Frame eine Top-Navigation nur ausführen kann, wenn seine übergeordneten Frames dies ebenfalls dürfen.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Kästchens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## Verhalten der `error`- und `load`-Ereignisse

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu sondieren. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden konnte.

## Responsive `<iframe>`-Größenanpassung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des Inhalts im Dokument preis, das sie einbetten.

Um eine reaktionsfähige Größenanpassung von {{htmlelement("iframe")}}-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)-Tag in ein eingebettetes Dokument aufgenommen werden, um dieses für die Weitergabe seiner Größeninformationen an das übergeordnete Dokument anzumelden. Die {{cssxref("frame-sizing")}}-CSS-Eigenschaft kann dann auf das `<iframe>` gesetzt werden, damit es dieselbe horizontale oder vertikale Größe wie der tatsächliche Inhaltsmaßstab des eingebetteten Dokuments annimmt. Dies stellt sicher, dass `<iframe>`-Inhalte nahtlos in ihr eingebettetes Element passen, und vermeidet unnötige Bildlaufleisten.

Um die Größe des `<iframe>` dynamisch anzupassen, sobald das eingebettete Dokument seine Layoutgröße ändert, können Sie die [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)-Methode aus dem eingebetteten Dokument aufrufen, um eine aktualisierte Größe zu melden.

## Barrierefreiheit

Personen, die mit assistierenden Technologien wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Titelwert sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Videos oder Audios enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem `<iframe>` ein. Dies ist ein häufiger Anwendungsfall von `<iframe>`s: Inhalte von einer anderen Website einzubetten. Zum Beispiel sind die Live-Beispiel selbst und das [ausprobieren](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Website.

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

### Quelltext in einem `<iframe>` einbetten

Dieses Beispiel rendert direkt Quellcode in einem `<iframe>`. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn benutzergenerierte Inhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` ausdrücklich als Basis-URL angeben.

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

Hier ist, wie man Escape-Sequenzen verwendet, wenn man `srcdoc` verwendet:

- Schreiben Sie zuerst den HTML-Text heraus und entgehen Sie allem, was Sie in einem normalen HTML-Dokument entgehen würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Um es also zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Unds (&) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt geschieht nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

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
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Anfangs- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [Zugriff auf das lokale Netzwerk](/de/docs/Web/Security/Defenses/Local_network_access)
