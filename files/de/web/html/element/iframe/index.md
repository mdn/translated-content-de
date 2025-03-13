---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element stellt einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar und bettet eine weitere HTML-Seite in die aktuelle Seite ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _übergeordneten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der andere einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Akku, Web-Share, etc.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Abschnitt `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Permissions Policy implementiert eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}} Header spezifizierten Richtlinie. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus aktivieren kann, indem die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und ist als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` gesetzt, wenn ein `<iframe>` aus einer anderen Domäne die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und ist als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` gesetzt, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass sein Inhalt in einem neuen, vorläufigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das `<iframe>` laden soll:

    - `eager`
      - : Lädt das `<iframe>` sofort beim Seitenaufruf (dies ist der Standardwert).
    - `lazy`

      - : Verzögert das Laden des `<iframe>`, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Das Ziel ist, den Netzwerk- und Speicherbedarf zu vermeiden, der erforderlich ist, um den Frame zu laden, bis der Browser sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Verringerung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein ansteuerbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente verwendet werden; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder dem `windowName` Parameter in der Methode [`window.open()`](/de/docs/Web/API/Window/open).
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Laden der Frame-Ressource gesendet werden soll:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten auch den Pfad.
    - `same-origin`
      - : Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Anfragen von anderen Ursprüngen enthalten keine Referrerinformationen.
    - `strict-origin`
      - : Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL, wenn eine Same-Origin-Anfrage durchgeführt wird, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`

  - : Steuert die Einschränkungen, die auf den Inhalt im `<iframe>` angewandt werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder platzgetrennte Tokens enthalten, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut, sowie durch die Navigation, die zu einem Datei-Download führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzereingabe initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu übermitteln. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite den Empfang eines [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignisses.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource [die Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität stillschweigend fehlschlagen.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument ein neues Browsing-Kontext ohne die Erzwingung der Sandbox-Flags zu öffnen. Dies ermöglicht beispielsweise eine sichere Werbeanzeige ohne die gleichen Einschränkungen auf die Seite, auf die die Anzeige verlinkt. Wenn dieses Flag nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das ursprüngliche `<iframe>` unterliegen.
    - `allow-presentation`
      - : Erlaubt Einbettungen die Kontrolle darüber, ob ein `<iframe>` eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung kommend behandelt, das immer die {{Glossary("same-origin_policy", "gleicher-Ursprungsrichtlinie")}} fehlschlagen lässt (möglicherweise wird der Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite das Ausführen von Skripten (jedoch ohne Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontextes (denjenigen namens `_top`).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontextes, aber nur, wenn sie durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigitationen zu nicht-`http` Protokollen, die im Browser eingebaut sind oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch `allow-popups` oder `allow-top-navigation` Schlüssel ausgelöst.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, ist es **äußerst abzuraten** sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument die Möglichkeit gibt, das `sandbox` Attribut zu entfernen - was es nicht sicherer macht als ganz ohne `sandbox` Attribut.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann – zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn beim Umleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs aus einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox` Attribut, ist der neue Browsing-Kontext den gleichen Sandbox-Beschränkungen unterworfen. Dies kann Probleme verursachen – z. B. wenn eine innerhalb eines `<iframe>` eingebettete Seite ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut auf einem neuen Tab öffnet wird, wird die Formularübermittlung in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`

  - : Die URL der Seite, die eingebettet werden soll. Verwenden Sie `about:blank`, um eine leere Seite einzubetten, die der [gleicher-Ursprungsrichtlinie](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` in dem Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL bei der Lösung von relativen URLs, wie Ankerlinks.

- `srcdoc`

  - : Eingebettetes HTML-Inline, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>` Tags, etc. beinhaltet, obwohl die meisten davon weggelassen werden können, wenn nur der Body-Inhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seine Location. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die im `src`-Attribut angegebene URL zurück.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL bei der Lösung von relativen URLs, wie Ankerlinks.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Ränder zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer ausführlichen Beschreibung des Frame-Inhalts. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Dimensionen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Nie eine Bildlaufleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}} Elemente, sind in dem [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingebetteten Ressource zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` im Inneren des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Frames aus kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) eine Referenz auf sein übergeordnetes Fenster erhalten.

Skriptzugriff auf den Inhalt eines Frames unterliegt der [gleicher-Ursprungsrichtlinie](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften anderer `window`-Objekte zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripte innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Eine Cross-Origin-Kommunikation kann mittels [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ermöglicht das `<iframe>` die Position des eingebetteten Dokuments innerhalb seiner Box mit der {{cssxref("object-position")}}-Eigenschaft zu justieren.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkung auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die bei `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der lokalen HTTP-Server zu erkunden. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis bei `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn das `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Benutzer, die mit Hilfstechnologie wie einem Screenreader navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Global_attributes/title) eines `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, besonders bei Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem `<iframe>` ein. Dies ist ein übliches Anwendungsbeispiel für `<iframe>`s: Inhalte von einer anderen Seite einbetten. Zum Beispiel sind das Live-Beispiel selbst und das [probiere es aus](#try_it)-Beispiel am Anfang beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

### Einbettung von Quellcode in einem `<iframe>`

Dieses Beispiel rendert direkt Quellcode in einem `<iframe>`. Dies kann als Technik zur Verhinderung von Skriptinjektionen verwendet werden, wenn Benutzerinhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

- Schreiben Sie zunächst das HTML heraus und escapen Sie alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` repräsentieren das gleiche Zeichen im `srcdoc`-Attribut. Um es also tatsächlich als Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Ampersands (`&`) mit `&amp;`. Zum Beispiel wird aus `&lt;` `&amp;lt;` und aus `&amp;` wird `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, dann sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;` aus diesem Schritt nicht zu `&amp;quot;` wird.

#### Ergebnis

{{EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das eröffnende als auch das schließende Tag sind zwingend erforderlich.</td>
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
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
