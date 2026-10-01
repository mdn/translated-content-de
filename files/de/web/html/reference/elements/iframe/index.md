---
title: HTML-Element `<iframe>` für Inline-Frames
short-title: <iframe>
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das [HTML](/de/docs/Web/HTML)-Element **`<iframe>`** stellt einen verschachtelten {{Glossary("browsing_context", "Browsing Context")}} dar und bettet ein anderes Dokument in das aktuelle ein.

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

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Legt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` fest. Die Richtlinie definiert anhand des Ursprungs der Anfrage, welche Funktionen dem `<iframe>` zur Verfügung stehen, beispielsweise der Zugriff auf Mikrofon, Kamera, Akku oder Web Share.

    Beispiele finden Sie unter [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Abschnitt zu `Permissions-Policy`.

    > [!NOTE]
    > Eine mit dem Attribut `allow` festgelegte Permissions Policy schränkt die im Header {{httpheader("Permissions-Policy")}} festgelegte Richtlinie zusätzlich ein. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Setzen Sie dieses Attribut auf `true`, wenn das `<iframe>` durch Aufruf der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) den Vollbildmodus aktivieren darf.

    > [!NOTE]
    > Dieses Attribut gilt als veraltet und wurde als `allow="fullscreen *"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Setzen Sie dieses Attribut auf `true`, wenn ein ursprungsübergreifendes `<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen dürfen soll.

    > [!NOTE]
    > Dieses Attribut gilt als veraltet und wurde als `allow="payment *"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, sofern vorhanden, festlegt, dass die für den aktuellen Benutzer ausgewählten Themen mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen.

- `credentialless` {{Experimental_Inline}}
  - : Setzen Sie dieses Attribut auf `true`, um das `<iframe>` ohne Anmeldedaten zu laden. Sein Inhalt wird dann in einem neuen, kurzlebigen Kontext geladen und hat keinen Zugriff auf das Netzwerk sowie auf Cookies und Speicherdaten, die seinem Ursprung zugeordnet sind. Der neue Kontext besteht nur für die Lebensdauer des obersten Dokuments. Dafür können die Einbettungsregeln von {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetzter COEP auch Dokumente von Drittanbietern einbetten können, für die keine COEP gesetzt ist. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless).

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Einzelheiten finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Der Standardwert ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Laden der Seite. Dies ist der Standardwert.
    - `lazy`
      - : Verzögert das Laden des iframes, bis es eine vom Browser berechnete Entfernung zum {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht.
        Dadurch sollen Netzwerk- und Speicherbandbreite erst dann zum Abrufen des Frames genutzt werden, wenn der Browser hinreichend sicher ist, dass er benötigt wird.
        In den meisten typischen Anwendungsfällen verbessert dies die Leistung und senkt den Ressourcenverbrauch, insbesondere durch kürzere anfängliche Ladezeiten der Seite.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking: Würde ein User Agent Lazy Loading auch bei deaktiviertem Scripting unterstützen, könnte eine Website die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgen. Dazu müsste sie iframes so im Markup der Seite platzieren, dass ein Server erfassen kann, wie viele iframes wann angefordert werden.

- `name`
  - : Ein Name, über den der eingebettete Browsing Context als Ziel angesprochen werden kann. Er kann im Attribut `target` der Elemente {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}, im Attribut `formtarget` der Elemente {{HTMLElement("input")}} oder {{HTMLElement("button")}} sowie als Parameter `windowName` der Methode [`window.open()`](/de/docs/Web/API/Window/open) verwendet werden. Außerdem wird der Name zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document), die eine Referenz auf das eingebettete Fenster beziehungsweise das Element selbst enthält.

- `privateToken` {{experimental_inline}}
  - : Enthält die Zeichenkettendarstellung eines Optionsobjekts für eine Operation mit einem [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using). Dieses Objekt hat dieselbe Struktur wie die Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken) des `RequestInit`-Dictionaries. IFrames mit diesem Attribut können beim Laden ihres eingebetteten Inhalts Vorgänge wie das Ausstellen oder Einlösen von Tokens einleiten.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Frame-Ressource gesendet wird:
    - `no-referrer`
      - : Der Header {{HTTPHeader("Referer")}} wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der Header {{HTTPHeader("Referer")}} wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Bei Anfragen an andere Ursprünge wird der gesendete Referrer auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Ursprungs wird weiterhin der Pfad angegeben.
    - `same-origin`
      - : Bei Anfragen an {{Glossary("Same-origin_policy", "denselben Ursprung")}} wird ein Referrer gesendet; ursprungsübergreifende Anfragen enthalten dagegen keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur dann den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), nicht jedoch an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardwert)
      - : Sendet bei einer Anfrage an denselben Ursprung die vollständige URL, bei gleichbleibendem Sicherheitsniveau des Protokolls (HTTPS→HTTPS) nur den Ursprung und an ein weniger sicheres Ziel (HTTPS→HTTP) keinen entsprechenden Header.
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad, nicht jedoch das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade TLS-geschützter Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Steuert die Einschränkungen für den im `<iframe>` eingebetteten Inhalt. Der Attributwert kann leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens enthalten, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein Element {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit dem Attribut [download](/de/docs/Web/HTML/Reference/Elements/a#download) sowie durch eine Navigation, die zum Download einer Datei führt. Dies gilt unabhängig davon, ob der Benutzer auf den Link geklickt oder JS-Code den Download ohne Benutzerinteraktion ausgelöst hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare abzusenden. Ohne dieses Schlüsselwort wird ein Formular zwar normal angezeigt, beim Absenden werden jedoch weder Eingaben validiert noch Daten an einen Webserver gesendet oder ein Dialog geschlossen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster mit [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen. Das Öffnen eines {{HTMLElement("dialog")}} ist auch ohne dieses Schlüsselwort erlaubt. Außerdem darf die Seite ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis empfangen.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource, die [Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Pop-ups, die beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"` erstellt werden. Ohne dieses Schlüsselwort schlagen solche Vorgänge ohne Fehlermeldung fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem Sandbox-Dokument, einen neuen Browsing Context zu öffnen, ohne dessen Sandbox-Einschränkungen auf diesen zu übertragen. So kann beispielsweise eine Anzeige eines Drittanbieters sicher in einer Sandbox ausgeführt werden, ohne dass für die verlinkte Seite dieselben Einschränkungen gelten. Fehlt dieses Token, unterliegen eine weitergeleitete Seite, ein Pop-up-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht einbettenden Seiten zu steuern, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten darf.
    - `allow-same-origin`
      - : Ohne dieses Token wird die Ressource so behandelt, als stamme sie von einem speziellen Ursprung, für den die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} nie erfüllt ist. Dies kann den Zugriff auf [Datenspeicher und Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) sowie auf einige JavaScript-APIs verhindern.
        > [!NOTE]
        > Wenn `allow-same-origin` vorhanden ist, kann ein übergeordnetes Dokument desselben Ursprungs weiterhin auf das DOM des iframes zugreifen und damit interagieren, selbst wenn `allow-scripts` nicht gesetzt ist. Das Token `allow-scripts` steuert lediglich die Skriptausführung innerhalb des eingebetteten Browsing Contexts; es hat keinen Einfluss auf den DOM-Zugriff durch das übergeordnete Dokument.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen, jedoch keine Pop-up-Fenster zu erstellen. Ohne dieses Schlüsselwort ist die Skriptausführung nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, eine Navigation des obersten Browsing Contexts auszulösen, der den Namen `_top` trägt.
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, eine Navigation des obersten Browsing Contexts auszulösen, jedoch nur, wenn sie durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu Nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch die Schlüsselwörter `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Das Attribut `sandbox` kann den integrierten PDF-Viewer des Browsers blockieren. Siehe [PDFs einbetten](#pdfs_einbetten).
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird von der gleichzeitigen Verwendung von `allow-scripts` und `allow-same-origin` **dringend abgeraten**. Dadurch könnte das eingebettete Dokument das Attribut `sandbox` entfernen – und wäre dann nicht sicherer als ohne dieses Attribut.
    > - Eine Sandbox ist nutzlos, wenn ein Angreifer Inhalte außerhalb eines `iframe` mit Sandbox anzeigen kann, etwa wenn ein Benutzer den Frame in einem neuen Tab öffnet. Solche Inhalte sollten daher von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn eine eingebettete Seite in einem `<iframe>` mit dem Attribut `sandbox` den Benutzer weiterleitet, ein Pop-up-Fenster oder einen neuen Tab öffnet, gelten für den neuen Browsing Context dieselben `sandbox`-Einschränkungen. Das kann zu Problemen führen: Öffnet beispielsweise eine in ein `<iframe>` eingebettete Seite, für die weder `sandbox="allow-forms"` noch `sandbox="allow-popups-to-escape-sandbox"` gesetzt ist, eine neue Website in einem separaten Tab, schlagen Formularübermittlungen in diesem neuen Browsing Context ohne Fehlermeldung fehl.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie `about:blank`, um eine leere Seite einzubetten, die der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie außerdem, dass das programmgesteuerte Entfernen des src-Attributs eines `<iframe>` – beispielsweise mit [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) – in Firefox ab Version 65, Chromium-basierten Browsern und Safari/iOS dazu führt, dass `about:blank` im Frame geladen wird.

    > [!NOTE]
    > Beim Auflösen relativer URLs, etwa von Ankerlinks, verwendet die Seite `about:blank` die URL des einbettenden Dokuments als Basis-URL.

- `srcdoc`
  - : Inline-HTML, das eingebettet wird und das Attribut `src` überschreibt. Der Inhalt sollte der Syntax eines vollständigen HTML-Dokuments entsprechen, einschließlich Doctype-Deklaration sowie der Tags `<html>` und `<body>`. Die meisten dieser Bestandteile können jedoch weggelassen werden, sodass nur der Body-Inhalt übrig bleibt. Das Dokument hat `about:srcdoc` als Adresse. Unterstützt ein Browser das Attribut `srcdoc` nicht, verwendet er stattdessen die URL im Attribut `src`.

    > [!NOTE]
    > Beim Auflösen relativer URLs, etwa von Ankerlinks, verwendet die Seite `about:srcdoc` die URL des einbettenden Dokuments als Basis-URL.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Der Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen User Agents unterstützt. Verwenden Sie sie nicht in neuen Inhalten und versuchen Sie, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zu seiner Umgebung.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um den Frame. Der Wert `0` entfernt den Rahmen. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}, um den Rahmen eines `<iframe>` zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Die URL einer ausführlichen Beschreibung des Frame-Inhalts. Aufgrund weitverbreiteter Fehlverwendung ist dieses Attribut für nicht visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Frame-Inhalt und seinem oberen beziehungsweise unteren Rand.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Frame-Inhalt und seinem linken beziehungsweise rechten Rand.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame anzeigen soll:
    - `auto`
      - : Nur wenn der Inhalt des Frames größer als dessen Abmessungen ist.
    - `yes`
      - : Zeigt immer eine Bildlaufleiste an.
    - `no`
      - : Zeigt nie eine Bildlaufleiste an.

## Verwendungshinweise

Jeder eingebettete Browsing Context hat ein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen aller eingebetteten Browsing Contexts werden in den [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing Contexts eingeordnet. Der Browsing Context, der andere einbettet, heißt _übergeordneter Browsing Context_. Der _oberste_ Browsing Context – der keinen übergeordneten Kontext hat – ist normalerweise das Browserfenster, das durch das Objekt [`Window`](/de/docs/Web/API/Window) dargestellt wird.

> [!WARNING]
> Da jeder Browsing Context eine vollständige Dokumentumgebung ist, benötigt jedes `<iframe>` auf einer Seite zusätzlichen Arbeitsspeicher und weitere Rechenressourcen. Theoretisch können Sie beliebig viele `<iframe>`-Elemente verwenden; prüfen Sie jedoch, ob dadurch Leistungsprobleme entstehen.

### Skripting

Inline-Frames sind wie {{HTMLElement("frame")}}-Elemente im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Über das DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte mit der Eigenschaft [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) auf das [`window`](/de/docs/Web/API/Window)-Objekt der im Frame angezeigten Ressource zugreifen. Die Eigenschaft [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) verweist auf das `document` innerhalb des `<iframe>` und entspricht damit `contentWindow.document`.

Ein Skript innerhalb eines Frames kann mit [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz auf sein übergeordnetes Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Wurde ein Skript von einem anderen Ursprung geladen, kann es nicht auf die meisten Eigenschaften anderer `window`-Objekte zugreifen. Das gilt auch für Skripte innerhalb eines Frames, die auf dessen übergeordnetes Fenster zugreifen möchten.
Eine ursprungsübergreifende Kommunikation ist mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) möglich.

#### Top-Navigation in ursprungsübergreifenden Frames

Skripte in einem Frame desselben Ursprungs können auf die Eigenschaft [`Window.top`](/de/docs/Web/API/Window/top) zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite an eine neue Adresse weiterzuleiten.
Dieses Verhalten wird als „Top-Navigation“ bezeichnet.

Ein ursprungsübergreifender Frame darf die oberste Seite nur dann über `top` weiterleiten, wenn für den Frame eine {{Glossary("sticky_activation", "dauerhafte Aktivierung")}} vorliegt.
Wird die Top-Navigation blockiert, können Browser die Erlaubnis des Benutzers zur Weiterleitung anfordern, den Fehler in der Entwicklerkonsole melden oder beides tun.
Diese Einschränkung wird als _Framebusting-Intervention_ bezeichnet.
Ein ursprungsübergreifender Frame kann die oberste Seite also nicht sofort weiterleiten: Der Benutzer muss zuvor mit dem Frame interagiert oder die Weiterleitung erlaubt haben.

Ein Frame mit Sandbox blockiert jede Top-Navigation, sofern das Attribut `sandbox` nicht [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) enthält.
Berechtigungen für die Top-Navigation werden vererbt. Ein verschachtelter Frame kann daher nur dann eine Top-Navigation ausführen, wenn auch seine übergeordneten Frames dazu berechtigt sind.

### PDFs einbetten

Ein `<iframe>` kann mithilfe des integrierten PDF-Viewers des Browsers ein PDF anzeigen. Anders als {{HTMLElement("object")}} unterstützt es keine untergeordneten Inhalte als Fallback, falls das PDF nicht angezeigt werden kann. Stellen Sie außerhalb des `<iframe>` einen Link bereit, damit Benutzer das PDF separat öffnen können.

Das Attribut [`sandbox`](#sandbox) kann verhindern, dass der integrierte PDF-Viewer geladen wird – selbst mit `allow-scripts` oder `allow-downloads`. Es eignet sich nicht als browserübergreifende Methode, um eine native PDF-Vorschau einzuschränken. Der PDF-Viewer des Browsers führt ausführbare Inhalte bereits in einer Sandbox aus.

### Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Bereichs mit der Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<iframe>`-Elemente.

### Verhalten der Ereignisse `error` und `load`

Die auf `<iframe>`-Elementen ausgelösten Ereignisse `error` und `load` könnten dazu verwendet werden, den URL-Raum von HTTP-Servern im lokalen Netzwerk zu untersuchen. Daher lösen User Agents als Sicherheitsmaßnahme das Ereignis [error](/de/docs/Web/API/HTMLElement/error_event) auf `<iframe>`-Elementen nicht aus. Das Ereignis [load](/de/docs/Web/API/HTMLElement/load_event) wird dagegen immer ausgelöst, auch wenn der Inhalt des `<iframe>` nicht geladen werden kann.

### Responsive Größenanpassung von `<iframe>`-Elementen

Aus Sicherheits- und Datenschutzgründen geben `<iframe>`-Elemente dem übergeordneten Dokument standardmäßig keine Informationen über die Größe des eingebetteten Dokumentinhalts preis.

Damit die Größe eines `<iframe>`-Elements responsiv an seinen Inhalt angepasst werden kann, lässt sich das Tag [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) in das eingebettete Dokument aufnehmen. Damit stimmt das Dokument der Weitergabe seiner Größeninformationen an das übergeordnete Dokument zu. Anschließend kann die CSS-Eigenschaft {{cssxref("frame-sizing")}} für das `<iframe>` gesetzt werden, damit es die horizontale oder vertikale Größe des tatsächlichen Inhalts des eingebetteten Dokuments übernimmt. So fügt sich der Inhalt des `<iframe>` ohne unnötige Bildlaufleisten in die einbettende Seite ein.

Wenn sich die Layoutgröße des eingebetteten Dokuments ändert, können Sie darin die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) aufrufen, damit eine aktualisierte Größe gemeldet und das `<iframe>` dynamisch angepasst wird.

## Barrierefreiheit

Personen, die mit Hilfstechnologien wie Screenreadern navigieren, können den Inhalt eines `<iframe>` anhand des [Attributs `title`](/de/docs/Web/HTML/Reference/Global_attributes/title) erkennen. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um herauszufinden, was darin eingebettet ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere auf Seiten mit mehreren `<iframe>`-Elementen oder wenn eingebettete Inhalte interaktiv sind, etwa Videos oder Audiodateien.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Das Einbetten von Inhalten einer anderen Website ist ein häufiger Anwendungsfall für iframes. Auch das Live-Beispiel selbst und das [interaktive Beispiel](#try_it) am Anfang betten Inhalte einer anderen MDN-Website über `<iframe>`-Elemente ein.

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

### Quellcode in ein \<iframe> einbetten

Dieses Beispiel stellt Quellcode direkt in einem iframe dar. In Verbindung mit dem Attribut `sandbox` kann diese Technik beim Anzeigen benutzergenerierter Inhalte helfen, Script-Injection zu verhindern.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` ausdrücklich als Basis-URL angeben.

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

- Schreiben Sie zunächst das HTML und maskieren Sie alles, was Sie auch in einem gewöhnlichen HTML-Dokument maskieren würden, beispielsweise `<`, `>` und `&`.
- `&lt;` und `<` stehen im Attribut `srcdoc` für genau dasselbe Zeichen. Damit im HTML-Dokument tatsächlich eine Escape-Sequenz entsteht, ersetzen Sie daher jedes kaufmännische Und (`&`) durch `&amp;`. So wird beispielsweise aus `&lt;` die Folge `&amp;lt;` und aus `&amp;` die Folge `&amp;amp;`.
- Ersetzen Sie jedes doppelte Anführungszeichen (`"`) durch `&quot;`, damit das Attribut `srcdoc` nicht vorzeitig endet. Wenn Sie stattdessen `'` verwenden, ersetzen Sie `'` entsprechend durch `&apos;`. Dieser Schritt erfolgt nach dem vorherigen; ein dabei erzeugtes `&quot;` wird also nicht zu `&amp;quot;`.

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
          >formulierender Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht erlaubt; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>Jedes Element, das eingebettete Inhalte zulässt.</td>
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
- [Zugriff auf das lokale Netzwerk](/de/docs/Web/Security/Defenses/Local_network_access)
