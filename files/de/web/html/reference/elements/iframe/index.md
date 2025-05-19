---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 0929c9af9db50a730fc0f72172d5a40024cae149
---

{{HTMLSidebar}}

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Document](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in den [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext – derjenige ohne Eltern – ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhten Speicher- und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>` verwenden, wie Sie möchten, aber achten Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Policy definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Abschnitt `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Permissions Policy setzt eine weitere Einschränkung zusätzlich zur im {{httpheader("Permissions-Policy")}}-Header spezifizierten Policy um. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Auf `true` setzen, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut angesehen und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` setzen, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut angesehen und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage nach der Quelle des `<iframe>` gesendet werden sollen. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` setzen, um das `<iframe>` credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen, zum Lebenszyklus des obersten Dokuments lokalen Kontext. Dafür können die {{httpheader("Cross-Origin-Embedder-Policy")}}-(COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit eingestelltem COEP Third-Party-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource erzwungen wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Lade das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögere das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Der Zweck ist es, den Netzwerk- und Speicherbandbreitenverbrauch zu vermeiden, der erforderlich ist, um den Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der anfänglichen Seitenladezeiten.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein zielbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}-Elemente; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente oder im `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden.
- `referrerpolicy`

  - : Gibt an, welcher [referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an Ursprünge gesendet, die kein {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) verwenden.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen werden keine Referrer-Informationen enthalten.
    - `strict-origin`
      - : Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei Anfragen im gleichen Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (außer dem [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Steuert die Einschränkungen, die für den eingebetteten Inhalt im `<iframe>` gelten. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie über die Navigation, die zum Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code dies ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu übermitteln. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Übermitteln wird weder die Eingabevalidierung auslösen noch Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen, durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Ermöglicht es der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht es der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (zum Beispiel von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität leise fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf anzuwenden. Damit kann zum Beispiel eine Third-Party-Werbung sicher gesandboxt werden, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Werbung verweist. Wenn dieses Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Beschränkungen wie das Ursprungs-`<iframe>`.
    - `allow-presentation`
      - : Erlaubt eingebetteten Elementen, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als Teil eines speziellen Ursprungs behandelt, der immer die {{Glossary("same-origin_policy", "same-origin policy")}} nicht erfüllt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das in das `<iframe>` geladen wird, mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) auf nicht partitionierte Cookies zuzugreifen, wenn der Benutzer aktiv eine Aktion ausführt.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext (denjenigen, der als `_top` benannt ist) zu navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext zu navigieren, jedoch nur, wenn dies durch eine Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch `allow-popups` oder `allow-top-navigation` Schlüsselwörter aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, ist es **stark abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es genauso unsicher macht, als würde man das `sandbox`-Attribut überhaupt nicht verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines gesandboxten `iframe` anzeigen kann — falls der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenzielle Schäden zu begrenzen.

    > [!NOTE]
    > Wenn Sie den Benutzer umleiten, ein Popup-Fenster öffnen oder einen neuen Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut öffnen, unterliegt der neue Browsing-Kontext den gleichen `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine eingebettete Seite innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut ein neues Site in einem separaten Tab öffnet, wird die Formularübermittlung in diesem neuen Browsing-Kontext leise fehlschlagen.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen von relativen URLs, wie z.B. Anker-Links.

- `srcdoc`

  - : Inline HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. umfasst, auch wenn die meisten davon ausgelassen werden können und nur der Body-Inhalt verbleibt. Dieses Dokument wird als `about:srcdoc` als seine Position haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen von relativen URLs wie Anker-Links.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten nicht in neuen Inhalten verwendet und aus bestehenden Inhalten entfernt werden.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber stattdessen sollte die CSS-Eigenschaft {{cssxref("border")}} verwendet werden, um die Rahmen vom `<iframe>` zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Frames-Inhalts. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Frames größer ist als seine Abmessungen.
    - `yes`
      - : Zeigen Sie immer eine Bildlaufleiste an.
    - `no`
      - : Zeigen Sie nie eine Bildlaufleiste an.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, das gleiche wie `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript eine Referenz auf das übergeordnete Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window` Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das Elternelement des Frames zugreifen. Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>`, dass die Position des eingebetteten Dokuments innerhalb seiner Box mit der {{cssxref("object-position")}} Eigenschaft angepasst werden kann.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Auswirkung auf `<iframe>` Elemente.

## Verhalten von `error` und `load` Ereignissen

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten genutzt werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks zu untersuchen. Daher lösen Benutzeragenten aus Sicherheitsgründen nicht das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden konnte.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein gängiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel ist das Live-Beispiel selbst und das [Try it](#try_it) Beispiel oben, beides `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Site.

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

### Einbetten von Quellcode in einem `<iframe>`

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn Benutzergenerierte Inhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

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

Hier ist, wie Sie Escape-Sequenzen beim Verwenden von `srcdoc` schreiben:

- Erstens, schreiben Sie das HTML aus und escapen alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&`, usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Um es also zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird aus `&lt;` `&amp;lt;`, und aus `&amp;` wird `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, damit `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

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
      <td>Keine, sowohl die start- als auch die end-Tags sind obligatorisch.</td>
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
