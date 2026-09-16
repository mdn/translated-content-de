---
title: "`<iframe>`-HTML-Inline-Frame-Element"
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 456c370394c0cd8869feb60c4e9926f35422beaf
---

Das [HTML](/de/docs/Web/HTML)-Element **`<iframe>`** stellt einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar, der ein anderes Dokument in das aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext verfügt über ein eigenes [document](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _übergeordneter Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — also derjenige ohne übergeordneten Kontext — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, benötigt jedes `<iframe>` auf einer Seite zusätzlichen Speicher und weitere Rechenressourcen. Obwohl Sie theoretisch beliebig viele `<iframe>`s verwenden können, sollten Sie auf Leistungsprobleme prüfen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Policy definiert anhand des Ursprungs der Anfrage, welche Funktionen für das `<iframe>` verfügbar sind (beispielsweise Zugriff auf Mikrofon, Kamera, Akku, Web Share usw.).

    Beispiele finden Sie unter [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy`.

    > [!NOTE]
    > Eine durch das Attribut `allow` angegebene Permissions Policy stellt zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header angegebenen Policy eine weitere Einschränkung dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` setzen, wenn das `<iframe>` durch Aufrufen der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Vollbildmodus aktivieren kann.

    > [!NOTE]
    > Dieses Attribut gilt als Legacy-Attribut und ist als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` setzen, wenn einem Cross-Origin-`<iframe>` erlaubt werden soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut gilt als Legacy-Attribut und ist als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das bei Vorhandensein angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage nach der Quelle des `<iframe>` gesendet werden sollen.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` setzen, um das `<iframe>` credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, ephemeren Kontext geladen wird. Es hat keinen Zugriff auf die mit seinem Ursprung verbundenen Netzwerk-, Cookie- und Speicherdaten. Es verwendet einen neuen Kontext, der lokal für die Lebensdauer des Dokuments der obersten Ebene ist. Im Gegenzug können die Einbettungsregeln von {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine für die eingebettete Ressource durchgesetzte [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP). Einzelheiten finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Der Standardwert ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Das iframe sofort beim Laden der Seite laden (dies ist der Standardwert).
    - `lazy`
      - : Das Laden des iframe aufschieben, bis es einen vom Browser definierten berechneten Abstand zum {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht.
        Ziel ist es, die für das Abrufen des Frames erforderliche Netzwerk- und Speicherbandbreite erst zu verwenden, wenn der Browser mit hinreichender Sicherheit davon ausgeht, dass sie benötigt wird.
        Dies verbessert in den meisten typischen Anwendungsfällen die Leistung und senkt die Kosten, insbesondere durch die Verkürzung der anfänglichen Seitenladezeiten.

        Das Laden wird nur aufgeschoben, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein User-Agent Lazy Loading bei deaktiviertem Scripting unterstützen würde, könnte eine Website dennoch die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgen, indem iframes strategisch im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele iframes angefordert werden und wann.

- `name`
  - : Ein als Ziel verwendbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im Attribut `target` der Elemente {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}, im Attribut `formtarget` der Elemente {{HTMLElement("input")}} oder {{HTMLElement("button")}} oder im Parameter `windowName` der Methode [`window.open()`](/de/docs/Web/API/Window/open) verwendet werden. Darüber hinaus wird der Name zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document), die eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.

- `privateToken` {{experimental_inline}}
  - : Enthält eine Zeichenfolgendarstellung eines Optionsobjekts, das eine Operation mit einem [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using) darstellt; dieses Objekt hat dieselbe Struktur wie die Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) des `RequestInit`-Wörterbuchs. IFrames, die dieses Attribut enthalten, können Operationen wie das Ausstellen oder Einlösen von Tokens initiieren, wenn ihr eingebetteter Inhalt geladen wird.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Frames gesendet werden soll:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen innerhalb desselben Ursprungs enthalten weiterhin den Pfad.
    - `same-origin`
      - : Für {{Glossary("Same-origin_policy", "denselben Ursprung")}} wird ein Referrer gesendet, Cross-Origin-Anfragen enthalten jedoch keine Referrer-Informationen.
    - `strict-origin`
      - : Den Ursprung des Dokuments nur dann als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), ihn jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Bei einer Same-Origin-Anfrage eine vollständige URL senden, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von durch TLS geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Steuert die auf den im `<iframe>` eingebetteten Inhalt angewendeten Einschränkungen. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder aus durch Leerzeichen getrennten Tokens bestehen, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem Attribut [download](/de/docs/Web/HTML/Reference/Elements/a#download) sowie über Navigationen, die zum Herunterladen einer Datei führen. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code den Vorgang ohne Benutzerinteraktion ausgelöst hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare abzusenden. Wird dieses Schlüsselwort nicht verwendet, wird ein Formular normal angezeigt, aber sein Absenden löst weder die Eingabevalidierung aus, noch sendet es Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster über [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite außerdem, das Ereignis [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) zu empfangen.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource, die [Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Pop-ups (beispielsweise erstellt durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wird dieses Schlüsselwort nicht verwendet, schlägt diese Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem in einer Sandbox ausgeführten Dokument, einen neuen Browsing-Kontext zu öffnen, ohne ihm die Sandbox-Flags aufzuerlegen. Dies ermöglicht beispielsweise, eine Werbung eines Drittanbieters sicher in einer Sandbox auszuführen, ohne dieselben Einschränkungen auf die Seite anzuwenden, auf die die Werbung verlinkt. Ist dieses Flag nicht enthalten, unterliegen eine weitergeleitete Seite, ein Pop-up-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettenden, zu steuern, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wird dieses Token nicht verwendet, wird die Ressource so behandelt, als stamme sie von einem speziellen Ursprung, der die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} immer verletzt (wodurch möglicherweise der Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert wird).
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein Same-Origin-übergeordnetes Dokument weiterhin auf das DOM des iframe zugreifen und damit interagieren, selbst wenn `allow-scripts` nicht gesetzt ist. Das Token `allow-scripts` steuert nur die Skriptausführung innerhalb des eingebetteten Browsing-Kontexts und beeinflusst nicht den DOM-Zugriff durch das übergeordnete Dokument.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (jedoch keine Pop-up-Fenster zu erstellen). Wird dieses Schlüsselwort nicht verwendet, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den Browsing-Kontext der obersten Ebene zu navigieren (denjenigen mit dem Namen `_top`).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den Browsing-Kontext der obersten Ebene zu navigieren, jedoch nur, wenn dies durch eine Benutzergeste ausgelöst wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch die Schlüsselwörter `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Das Attribut `sandbox` kann den integrierten PDF-Viewer des Browsers blockieren. Siehe [Einbetten von PDFs](#einbetten_von_pdfs).
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird **dringend davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da das eingebettete Dokument dadurch das Attribut `sandbox` entfernen kann — wodurch es nicht sicherer ist, als das Attribut `sandbox` überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn ein Angreifer Inhalte außerhalb eines in einer Sandbox ausgeführten `iframe` anzeigen kann — beispielsweise wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten außerdem von einem _separaten Ursprung_ bereitgestellt werden, um mögliche Schäden zu begrenzen.

    > [!NOTE]
    > Wenn ein Benutzer umgeleitet wird, ein Pop-up-Fenster geöffnet wird oder ein neuer Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem Attribut `sandbox` geöffnet wird, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — wenn beispielsweise eine innerhalb eines `<iframe>` eingebettete Seite ohne gesetztes Attribut `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` eine neue Website in einem separaten Tab öffnet, schlägt das Absenden von Formularen in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie außerdem, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS `about:blank` im Frame geladen wird.

    > [!NOTE]
    > Die Seite `about:blank` verwendet die URL des einbettenden Dokuments als ihre Basis-URL, wenn relative URLs wie etwa Ankerlinks aufgelöst werden.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das Attribut `src` überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, einschließlich der Doctype-Direktive sowie der Tags `<html>`, `<body>` usw., obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seinen Speicherort. Unterstützt ein Browser das Attribut `srcdoc` nicht, greift er auf die URL im Attribut `src` zurück.

    > [!NOTE]
    > Die Seite `about:srcdoc` verwendet die URL des einbettenden Dokuments als ihre Basis-URL, wenn relative URLs wie etwa Ankerlinks aufgelöst werden.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Der Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen User-Agents unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame; Sie sollten stattdessen jedoch die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer ausführlichen Beschreibung des Inhalts des Frames. Aufgrund weitverbreiteten Missbrauchs ist dies für nicht visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rahmen.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rahmen.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Hinweise zur Verwendung

### Scripting

Inline-Frames sind wie {{HTMLElement("frame")}}-Elemente im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mithilfe des DOM-Objekts [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte über die Eigenschaft [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) auf das [`window`](/de/docs/Web/API/Window)-Objekt der Ressource im Frame zugreifen. Die Eigenschaft [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) verweist auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Aus dem Inneren eines Frames kann ein Skript über [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz auf sein übergeordnetes Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können nicht auf die meisten Eigenschaften anderer `window`-Objekte zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Element des Frames zugreifen.
Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

#### Navigation der obersten Ebene in Cross-Origin-Frames

Skripte, die in einem Same-Origin-Frame ausgeführt werden, können auf die Eigenschaft [`Window.top`](/de/docs/Web/API/Window/top) zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die Seite der obersten Ebene an einen neuen Speicherort umzuleiten.
Dieses Verhalten wird als „Top-Navigation“ bezeichnet.

Ein Cross-Origin-Frame darf die Seite der obersten Ebene mit `top` nur umleiten, wenn der Frame über {{Glossary("sticky_activation", "sticky activation")}} verfügt.
Wird die Top-Navigation blockiert, können Browser entweder um die Berechtigung des Benutzers zur Umleitung bitten oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Browserbeschränkung wird als _Framebusting-Intervention_ bezeichnet.
Das bedeutet, dass ein Cross-Origin-Frame die Seite der obersten Ebene nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Berechtigung zur Umleitung erteilt haben.

Ein Frame in einer Sandbox blockiert jede Top-Navigation, es sei denn, die Werte des Attributs `sandbox` sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Berechtigungen für die Top-Navigation vererbt werden; ein verschachtelter Frame kann daher nur dann eine Top-Navigation durchführen, wenn dies auch seinen übergeordneten Frames erlaubt ist.

### Einbetten von PDFs

Ein `<iframe>` kann eine PDF-Datei mit dem integrierten PDF-Viewer des Browsers anzeigen. Anders als {{HTMLElement("object")}} unterstützt es keinen Kindinhalt als Fallback, wenn die PDF-Datei nicht angezeigt werden kann. Stellen Sie außerhalb des `<iframe>` einen Link bereit, damit Benutzer die PDF-Datei separat öffnen können.

Das Attribut [`sandbox`](#sandbox) kann das Laden des integrierten PDF-Viewers verhindern, selbst mit `allow-scripts` oder `allow-downloads`. Es ist keine portable Methode, einer nativen PDF-Vorschau Einschränkungen hinzuzufügen. Der PDF-Viewer des Browsers führt bereits alle ausführbaren Inhalte in einer Sandbox aus.

### Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens über die Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<iframe>`-Elemente.

### Verhalten der Ereignisse `error` und `load`

Die für `<iframe>`s ausgelösten Ereignisse `error` und `load` könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu untersuchen. Daher lösen User-Agents als Sicherheitsvorkehrung das Ereignis [error](/de/docs/Web/API/HTMLElement/error_event) nicht für `<iframe>`s aus, und das Ereignis [load](/de/docs/Web/API/HTMLElement/load_event) wird immer ausgelöst, selbst wenn das Laden des `<iframe>`-Inhalts fehlschlägt.

### Responsive Größenanpassung von `<iframe>`s

Aus Sicherheits- und Datenschutzgründen legen `<iframe>`-Elemente dem übergeordneten Dokument standardmäßig keine Informationen über die Größe des Inhalts in dem Dokument offen, das sie einbetten.

Um die responsive Größenanpassung von `<iframe>`-Elementen basierend auf ihrem Inhalt zu aktivieren, kann das Tag [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) in ein eingebettetes Dokument aufgenommen werden, damit es seine Größeninformationen mit dem übergeordneten Dokument teilt. Die CSS-Eigenschaft {{cssxref("frame-sizing")}} kann dann auf dem `<iframe>` gesetzt werden, damit es dieselbe horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments annimmt. Dadurch fügt sich der `<iframe>`-Inhalt nahtlos in sein einbettendes Element ein und unnötige Bildlaufleisten werden vermieden.

Um die Größe des `<iframe>` dynamisch anzupassen, wenn sich die Layoutgröße des eingebetteten Dokuments ändert, können Sie die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) aus dem eingebetteten Dokument aufrufen, damit es eine aktualisierte Größe meldet.

## Barrierefreiheit

Personen, die mit assistiven Technologien wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines `<iframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere bei Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: Inhalte von einer anderen Website einzubetten. Beispielsweise sind sowohl das Live-Beispiel selbst als auch das Beispiel [Ausprobieren](#try_it) oben `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Website.

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

### Quellcode in einem \<iframe> einbetten

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Script-Injection beim Anzeigen von benutzergenerierten Inhalten zu verhindern, wenn es mit dem Attribut `sandbox` kombiniert wird.

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

- Schreiben Sie zuerst das HTML aus und escapen Sie alles, was Sie auch in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` stellen im Attribut `srcdoc` exakt dasselbe Zeichen dar. Um daraus also eine tatsächliche Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Beispielsweise wird `&lt;` zu `&amp;lt;` und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das Attribut `srcdoc` vorzeitig beendet wird. (Wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen.) Dieser Schritt erfolgt nach dem vorherigen, sodass das in diesem Schritt erzeugte `&quot;` nicht zu `&amp;quot;` wird.

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
          >Phrasing-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, wahrnehmbarer Inhalt.
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
      <th scope="row">Erlaubte übergeordnete Elemente</th>
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
- [Zugriff auf lokale Netzwerke](/de/docs/Web/Security/Defenses/Local_network_access)
