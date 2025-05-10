---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in den [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird _übergeordneter Browsing-Kontext_ genannt. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhte Speicherkapazität und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber prüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`

  - : Gibt eine [Berechtigungen-Politik](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Politik definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share, etc.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Berechtigungen-Politik implementiert eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}} Header angegebenen Politik. Sie ersetzt sie nicht.

- `allowfullscreen`

  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus aktivieren kann, indem es die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufruft.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wurde als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` gesetzt, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wurde als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die für den aktuellen Benutzer ausgewählten Themen mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollten. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldedaten zu machen, was bedeutet, dass sein Inhalt in einem neuen, kurzlebigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal für die Lebensdauer des obersten Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittpartei-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Lade das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögere das Laden des iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht hat, wie vom Browser definiert.
        Die Absicht besteht darin, die Netzwerk- und Speicherbandbreite zu vermeiden, die erforderlich ist, um den Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Verringerung der anfänglichen Seitenladezeiten.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein ansprechbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder der `windowName` Parameter in der [`window.open()`](/de/docs/Web/API/Window/open) Methode.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite begrenzt: Schema, {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port begrenzt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sende eine vollständige URL bei einer gleichen Ursprungs Anfrage, sende nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sende keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält sowohl den Ursprung _als auch_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben kann.

- `sandbox`

  - : Steuert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder leerzeichengetrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [Download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch eine Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link klickte oder JS-Code dies ohne Benutzereingriff initiierte.
    - `allow-forms`
      - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht auch der Seite die Empfang von [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent).
    - `allow-orientation-lock`
      - : Ermöglicht der Ressource das [Arretieren der Bildschirmorientierung](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Ermöglicht Popups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/HTMLDialogElement/showModal)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht einem sandkäfigierten Dokument das Öffnen eines neuen Browsing-Kontexts, ohne die Sandboxflags darauf anzuwenden. Dies ermöglicht es z.B. einer Drittanbieter-Werbung sicher gesandkäfigt zu werden, ohne dieselben Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verweist. Wenn dieses Flag nicht enthalten ist, unterliegt eine weitergeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandboxing-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht Embedders die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Politik")}} nicht erfüllt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument im `<iframe>`, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts (desjenigen mit dem Namen `_top`).
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht der Ressource die Navigation des obersten Browsing-Kontexts, jedoch nur, wenn initiiert durch eine Benutzeraktion.
    - `allow-top-navigation-to-custom-protocols`
      - : Ermöglicht Navigationen zu nicht-`http`-Protokollen, die in den Browser eingebaut sind oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, ist es **stark abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was genauso unsicher ist, wie das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines gesandkäfigten `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenzielle Schäden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem Attribut `sandbox`, unterliegt der neue Browsing Kontext den gleichen `sandbox`-Beschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` eingebettet ist, das kein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut enthält, eine neue Webseite in einem separaten Tab öffnet, schlägt das Absenden von Formularen in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die mit der [Same-Origin-Politik](/de/docs/Web/Security/Same-origin_policy#inherited_origins) übereinstimmt. Beachten Sie auch, dass das programmatische Entfernen eines `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird, in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen relativer URLs, z.B. von Ankerlinks.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. umfasst, obwohl die meisten von ihnen weggelassen werden können, was nur den Körperinhalt hinterlässt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen relativer URLs, z.B. von Ankerlinks.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen User Agents unterstützt. Sie sollten sie in neuen Inhalten nicht verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standardwert) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Frame-Inhalts. Aufgrund weitverbreiteten Missbrauchs ist dies nicht hilfreich für nicht-visuelle Browser.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rahmen.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rahmen.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Scrollleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Niemals eine Scrollleiste anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}} Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, ebenso wie `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript eine Referenz auf sein Elternfenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Politik](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Elternfenster zugreifen. Eine plattformübergreifende Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Feldes mit der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Wirkung auf `<iframe>` Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>` ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu untersuchen. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis auf `<iframe>` nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, auch wenn der Inhalt des `<iframe>` nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt kurz und prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, besonders für Seiten mit mehreren `<iframe>` oder wenn Einbettungen interaktiven Inhalt wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: Inhalte von einer anderen Website einzubetten. Zum Beispiel sind das Live-Sample selbst und das [Try it](#try_it) Beispiel oben beides `<iframe>` Einbettungen von Inhalten einer anderen MDN-Seite.

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

{{EmbedLiveSample('A_basic_iframe', 640,400)}}

### Einbettung von Quellcode in ein `<iframe>`

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen bei der Anzeige von benutzergenerierten Inhalten zu verhindern, wenn es mit dem `sandbox` Attribut kombiniert wird.

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

- Schreiben Sie zuerst das HTML aus, und escapen Sie alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` repräsentieren exakt dasselbe Zeichen im `srcdoc` Attribut. Um daraus eine tatsächliche Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Kaufmannsund-Zeichen (`&`) durch `&amp;`. Beispielsweise wird aus `&lt;` `&amp;lt;`, und aus `&amp;` wird `&amp;amp;`.
- Ersetzen Sie doppelte Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc` Attribut vorzeitig terminiert wird (wenn Sie `'` verwenden, sollten Sie `&apos;` statt dessen verwenden). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Übersicht

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
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
