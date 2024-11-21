---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigations. Die Navigations jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Übergeordneter Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, achten Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Bestimmt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<iframe>`. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (z. B. Zugriff auf Mikrofon, Kamera, Akku, Web-Share usw.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) im `Permissions-Policy`-Thema für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Permissions Policy ist eine zusätzliche Einschränkung zur Richtlinie, die im {{httpheader("Permissions-Policy")}}-Header festgelegt ist. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltet angesehen und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` gesetzt, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltet angesehen und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn vorhanden, spezifiziert, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollten. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, die Cookies und Datenspeicher, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der an die Lebensdauer des obersten Dokuments gebunden ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit festgelegtem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/CSP), die für die eingebettete Ressource durchgesetzt wird. Weitere Details siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Lässt das iframe sofort beim Laden der Seite laden (dies ist der Standardwert).
    - `lazy`

      - : Verzögert das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}}, wie vom Browser definiert, erreicht. Die Absicht ist, den Netzwerk- und Speicherbedarf, der benötigt wird, um den Frame abzurufen, zu vermeiden, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird. Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Verkürzung der anfänglichen Seitenladezeiten.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein zielgerichteter Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente oder im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente oder im `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Ressource des Frames gesendet werden soll:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für den {{Glossary("Same-origin_policy", "selben Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)

      - : Sendet eine vollständige URL, wenn eine Anfrage im selben Ursprung erfolgt, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).

    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Kontrolliert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder leerzeichenseparierte Token, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder nicht und ob der Aufruf ohne Benutzereingriff durch JS-Code gestartet wurde.
    - `allow-forms`
      - : Ermöglicht es der Seite, Formulare zu übermitteln. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber beim Absenden werden keine Eingabevalidierungen ausgelöst, Daten an einen Webserver gesendet oder ein Dialog geschlossen.
    - `allow-modals`
      - : Ermöglicht es der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource [die Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht es der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt es einem im Sandkasten befindlichen Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandkasten-Flags darauf anzuwenden. Dies erlaubt es beispielsweise, eine Anzeige von Drittanbietern sicher zu sandkasten, ohne die gleichen Einschränkungen für die Seite zu erzwingen, auf die die Anzeige verlinkt. Wenn dieses Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt es Einbettern, zu steuern, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend betrachtet, der immer die {{Glossary("same-origin_policy", "same-origin policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht es der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist dieser Vorgang nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt es einem im `<iframe>` geladenen Dokument, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugang zu nicht partitionierten Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext (denjenigen, der `_top` genannt wird) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, jedoch nur, wenn dies durch eine Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigierungen zu nicht-`http`-Protokollen, die im Browser eingebaut sind oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, wird **dringend davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht, als wenn man das `sandbox`-Attribut überhaupt nicht verwenden würde.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, beim Öffnen eines Popup-Fensters oder beim Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann zu Problemen führen — beispielsweise wenn eine Seite, die innerhalb eines `<iframe>`s ohne ein gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, dann schlägt das Absenden des Formulars in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen eines `src`-Attributes eines `<iframe>`s (z. B. durch [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), browsern auf Chromium-Basis und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie z.B. Anker-Links.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. beinhaltet, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt übrig bleibt. Dieses Dokument wird `about:srcdoc` als Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie z.B. Anker-Links.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten in neuem Inhalt nicht verwendet und aus bestehendem Inhalt entfernt werden.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Zeigt immer eine Bildlaufleiste.
    - `no`
      - : Zeigt niemals eine Bildlaufleiste.

## Skripting

Inline-Frames, wie die {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gezeichneten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, dasselbe wie `contentWindow.document`.

Von innen eines Frames aus kann ein Skript eine Referenz zu seinem übergeordneten Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window`-Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Elternteil des Frames zugreifen. Die Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Da es sich um ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) handelt, kann die Position des eingebetteten Dokuments innerhalb seiner Box mit der {{cssxref("object-position")}} Eigenschaft angepasst werden.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## `error`- und `load`-Ereignisverhalten

Die `error`- und `load`-Ereignisse, die an `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der lokalen Netzwerkeinstellungen von HTTP-Servern zu durchsuchen. Daher feuern Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis bei `<iframe>`s nicht, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, selbst wenn das `<iframe>`-Inhaltsladen fehlschlägt.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmlesegerät navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Beispielsweise sind der Live-Sample selbst und das [try it](#try_it) Beispiel oben beide `<iframe>`-Einbettungen von Inhalten aus einer anderen MDN-Seite.

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

Dieses Beispiel rendert den Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skript-Injektion zu verhindern, wenn Benutzergenerierter Inhalt angezeigt wird, in Kombination mit dem `sandbox`-Attribut.

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

Hier ist, wie man Escape-Sequenzen schreibt, wenn man `srcdoc` benutzt:

- Schreiben Sie zuerst das HTML aus und escapen Sie alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` stellen dasselbe Zeichen im `srcdoc`-Attribut dar. Daher, um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jedes Kaufmännische Und (&) durch `&amp;`. Beispielsweise wird `&lt;` zu `&amp;lt;` und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wurde, nicht zu `&amp;quot;` wird.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassener Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
