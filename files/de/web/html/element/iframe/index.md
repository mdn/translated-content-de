---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen eingebetteten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle Seite ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als übergeordneter Browsing-Kontext bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Elternteil — ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumenten-Umgebung ist, erfordert jedes `<iframe>` in einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s wie gewünscht verwenden, aber achten Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` basierend auf dem Ursprung der Anforderung verfügbar sind (z. B. der Zugriff auf das Mikrofon, die Kamera, die Batterie, die Webfreigabe usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie implementiert eine zusätzliche Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie. Es ersetzt diese nicht.

- `allowfullscreen`

  - : Wird auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufruf der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut angesehen und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Wird auf `true` gesetzt, wenn ein fremdursprüngliches `<iframe>` erlaubt sein soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut angesehen und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die Quelle des `<iframe>` gesendet werden sollen. Siehe [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Wird auf `true` gesetzt, um das `<iframe>` codelateral zu machen, was bedeutet, dass sein Inhalt in einem neuen, vergänglichen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit festgelegtem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Laden Sie das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögert das Laden des iframes, bis es einen berechneten Abstand vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Das Ziel ist, das Netzwerk und die erforderliche Speicherbandbreite zum Abrufen des Frames erst dann zu verwenden, wenn der Browser hinreichend sicher ist, dass der Frame benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, indem insbesondere die anfänglichen Seitenladezeiten verkürzt werden.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein ansprechbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente verwendet werden; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder im `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open)-Methode.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, bei Anfragen über verschiedene Ursprünge wird jedoch keine Referrer-Information enthalten.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Eine vollständige URL senden, wenn eine Anfrage mit demselben Ursprung durchgeführt wird, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP) senden.
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Steuert die für den im `<iframe>` eingebetteten Inhalt geltenden Einschränkungen. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder aus Leerzeichen-getrennten Tokens bestehen, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Nutzer auf den Link geklickt hat oder JS-Code ihn ohne Nutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen, indem [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) aufgerufen werden, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Außerdem ermöglicht es der Seite, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisse zu erhalten.
    - `allow-orientation-lock`
      - : Lässt die Ressource die [Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität heimlich fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem in Sandbox befindlichen Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxflags darauf anzuwenden. Dadurch kann beispielsweise eine Anzeige von einem Drittanbieter sicher in der Sandbox betrieben werden, ohne dass dieselben Einschränkungen auf die Seite angewendet werden, auf die die Anzeige verlinkt. Wenn diese Flagge nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das ursprüngliche `<iframe>` unterliegen.
    - `allow-presentation`
      - : Erlaubt es Einbettungen, zu steuern, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} immer fehlschlägt (potenziell den Zugriff auf [Datenspeicher/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindernd).
    - `allow-scripts`
      - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den top-level Browsing-Kontext (denjenigen namens `_top`) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den top-level Browsing-Kontext navigieren, aber nur, wenn dies durch eine Nutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das `allow-popups`- oder `allow-top-navigation`-Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, wird **stark davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — womit es nicht sicherer als ohne Verwendung des `sandbox`-Attributs wäre.
    > - Sandboxing ist nutzlos, wenn ein Angreifer Inhalte außerhalb eines in der Sandbox befindlichen `iframe` anzeigen kann - z. B. wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bedient werden, um potenzielle Schäden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Nutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die in einem `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, schlägt die Formularübermittlung in diesem neuen Browsing-Kontext heimlich fehl.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `<iframe>`-Quellattributs (z. B. durch [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als ihre Basis-URL, wenn sie relative URLs, wie Ankerlinks auflöst.

- `srcdoc`

  - : Inline-HTML zur Einbettung, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können, sodass nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seinen Speicherort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als ihre Basis-URL, wenn sie relative URLs, wie Ankerlinks auflöst.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzernagenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Rahmeninhalts. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Rahmeninhalt und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Rahmeninhalt und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Scrollleiste für den Rahmen bereitstellen soll:

    - `auto`
      - : Nur wenn der Rahmeninhalt größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Keinesfalls eine Scrollleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im pseudo-array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) auf sein übergeordnetes Fenster zugreifen.

Der Skriptzugriff auf den Inhalt eines Rahmens unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window`-Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Rahmens, die auf das übergeordnete Element des Rahmens zugreifen. Eine Kommunikation zwischen verschiedenen Ursprüngen kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>` das Anpassen der Position des eingebetteten Dokuments innerhalb seines Rahmens durch die {{cssxref("object-position")}}-Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## Verhalten von `error` und `load`-Ereignissen

Die `error`- und `load`-Ereignisse, die in `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der lokalen Netzwerks-HTTP-Server zu untersuchen. Daher, als Vorsichtsmaßnahme, lösen Benutzeragenten das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis in `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die assistive Technologien wie einen Screenreader verwenden, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) eines `<iframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn die Einbettungen interaktiven Inhalt wie Videos oder Audiowiedergaben enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite auf <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: das Einbetten von Inhalten von einer anderen Website. Zum Beispiel sind das Live-Beispiel selbst und das [Probieren Sie es aus](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skripteinspritzung zu verhindern, wenn benutzergenerierter Inhalt angezeigt wird, kombiniert mit dem `sandbox`-Attribut.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

Hier ist, wie man Escape-Sequenzen beim Verwenden von `srcdoc` schreibt:

- Schreiben Sie zuerst das HTML auf und entkommen Sie allem, was Sie in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren genau dasselbe Zeichen im `srcdoc`-Attribut. Um es in eine tatsächliche Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jedes kaufmännische Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;` und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie jedes doppelte Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` anstelle verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Übersicht

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
      <td>Keine, sowohl Start- als auch End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
