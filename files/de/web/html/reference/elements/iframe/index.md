---
title: "`<iframe>`: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<iframe>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen eingebetteten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle Seite ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird _Eltern-Browsing-Kontext_ genannt. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, repräsentiert durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, erfordert jedes `<iframe>` auf einer Seite mehr Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`

  - : Definiert eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>`. Die Richtlinie legt fest, welche Funktionen für das `<iframe>` verfügbar sind (beispielsweise Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.), basierend auf der Herkunft der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Berechtigungsrichtlinie stellt eine zusätzliche Einschränkung dar, die auf der im {{httpheader("Permissions-Policy")}}-Header spezifizierten Richtlinie aufbaut. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Wird auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus aktivieren kann, indem die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wird als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Wird auf `true` gesetzt, wenn ein Cross-Origin `<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wird als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollten. Weitere Details siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}

  - : Wird auf `true` gesetzt, um das `<iframe>` als credentienless zu deklarieren, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Netzwerkzugang, keinen Zugriff auf Cookies und keine Speicherinformationen, die mit seinem Ursprung verbunden sind. Es nutzt einen neuen Kontext, lokal zur Lebensdauer des obersten Dokuments. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln gelockert werden, so dass Dokumente mit COEP-Satz von Drittanbieter-Dokumente einbetten können, die dies nicht tun. Weitere Details siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Einzelheiten siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das Iframe laden soll:

    - `eager`
      - : Lade das Iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögern des Ladens des Iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} erreicht hat, wie vom Browser definiert.
        Das Ziel ist es, die Netzwerk- und Speicherbandbreite zu vermeiden, die erforderlich ist, um den Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Verringerung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur aufgeschoben, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme zur Verfolgungsprävention.

- `name`
  - : Ein zielgerichteter Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder der `windowName` Parameter in der [`window.open()`](/de/docs/Web/API/Window/open) Methode.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der zu anderen Ursprüngen gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigations auf demselben Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartiger Ursprung")}} gesendet, aber bei Anfragen über Ursprünge hinweg enthält er keine Referrer-Informationen.
    - `strict-origin`
      - : Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Eine vollständige URL senden, wenn eine Anfrage im gleichen Ursprung durchgeführt wird, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header senden, an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen auf unsichere Ursprünge verrät.

- `sandbox`

  - : Kontrolliert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut, sowie durch die Navigation, die zu einem Dateidownload führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Ermöglicht der Seite das Versenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber beim Absenden wird keine Eingabevalidierung ausgelöst, keine Daten an einen Webserver gesendet oder ein Dialog geschlossen.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von Modalfenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} jederzeit unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource, die [Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (erstellt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt solche Funktionalität lautlos fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem auf einer Sandkastenseite geladenen Dokument das Öffnen eines neuen Browsing-Kontexts ohne die Sandkasten-Einschränkungen darauf anzuwenden. Dies erlaubt zum Beispiel eine dritte Partei, eine Werbung sicher im Sandkasten zu halten, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verlinkt. Wenn dieses Flag nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandkasten-Einschränkungen wie das ursprüngliche `<iframe>` unterworfen.
    - `allow-presentation`
      - : Ermöglicht es dem Einbettenden, die Steuerung darüber zu haben, ob ein iframe eine [Präsentationssitzung starten](/de/docs/Web/API/PresentationRequest) kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "gleicher Ursprungspolitik")}} verletzt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem in dem `<iframe>` geladenen Dokument die Nutzung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Ermöglicht der Ressource das Navigieren des obersten Browsing-Kontexts (desjenigen namens `_top`).
    - `allow-top-navigation-by-user-activation`
      - : Ermöglicht der Ressource das Navigieren des obersten Browsing-Kontexts, jedoch nur, wenn es durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, wird dringend davon abgeraten, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument erlaubt, das `sandbox`-Attribut zu entfernen — wodurch es genauso unsicher wird, wie es das `sandbox` Attribut überhaupt nicht zu verwenden.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed iframes anzeigen kann — beispielsweise wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten ebenfalls von einem _separaten Ursprung_ geliefert werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext den gleichen `sandbox`-Einschränkungen. Das kann zu Problemen führen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eingebettet ist, eine neue Site in einem separaten Tab öffnet, schlägt die Formularübermittlung in diesem neuen Browsing-Kontext lautlos fehl.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die den [gleichartiger Ursprung](/de/docs/Web/Security/Same-origin_policy#inherited_origins) erfüllt. Beachten Sie auch, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) bewirkt, dass `about:blank` im Frame in Firefox (seit Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen von relativen URLs, wie Ankerlinks.

- `srcdoc`

  - : Inline HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können und nur der Body-Inhalt übrig bleibt. Dieses Dokument wird `about:srcdoc` als seinen Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen von relativen URLs, wie Ankerlinks.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie in neuen Inhalten nicht mehr verwenden und versuchen, sie aus vorhandenen Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Bildlaufleiste für den Rahmen bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripting

Inline-Frames wie {{HTMLElement("frame")}}-Elemente sind im [`window.frames`](/de/docs/Web/API/Window/frames)-Pseudo-Ar

ray enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, ebenso wie `contentWindow.document`.

Vom Inneren eines Frames aus kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) auf das übergeordnete Fenster zugreifen.

Der Skriptzugriff auf den Inhalt eines Rahmens unterliegt der [gleichartige Ursprung-Politik](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Fenster zugreifen. Eine Kommunikation über Ursprünge hinweg kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der lokalen Netzwerk-HTTP-Server zu sondieren. Daher, als Sicherheitsmaßnahme, lösen Benutzeragenten das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen wird.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, besonders für Seiten mit mehreren `<iframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Videos oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [versuche es](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um eine Skript-Injektion zu verhindern, wenn benutzergenerierte Inhalte angezeigt werden, kombiniert mit dem `sandbox`-Attribut.

Beachten Sie, dass bei der Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der Einbettungsseite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt zeigen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

- Schreiben Sie zuerst das HTML heraus und escapen Sie alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Daher, um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Kaufmanns-Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, dann sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

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
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die öffnenden als auch die schließenden Tags sind obligatorisch.</td>
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
