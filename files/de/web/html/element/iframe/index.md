---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als der _übergeordnete Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne übergeordneten Kontext — ist in der Regel das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, erfordert jedes `<iframe>` auf einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber prüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Legt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) für das `<iframe>` fest. Die Richtlinie definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) im Abschnitt `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Berechtigungsrichtlinie implementiert eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header festgelegten Richtlinie. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Auf `true` gesetzt, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die `<iframe>`-Quelle gesendet werden sollten. Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}

  - : Auf `true` gesetzt, um das `<iframe>` credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugang zum Netzwerk, zu Cookies und zu Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der auf die Lebensdauer des obersten Dokuments beschränkt ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, so dass Dokumente mit gesetztetem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Weitere Details finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/CSP), die für die eingebettete Ressource durchgesetzt wird. Weitere Informationen finden Sie unter [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp).

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Lade das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögere das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}}, wie vom Browser definiert, erreicht.
        Der Zweck ist, die Netzwerkauslastung und den Speicherdatenverbrauch zu vermeiden, die erforderlich sind, um den Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Reduzierung der Ladezeiten der anfänglichen Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Nachverfolgung.

- `name`
  - : Ein zielgerichteter Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der Elemente {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} verwendet werden; im `formtarget`-Attribut der Elemente {{HTMLElement("input")}} oder {{HTMLElement("button")}}; oder im `windowName`-Parameter der Methode [`window.open()`](/de/docs/Web/API/Window/open).
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Frame-Ressource gesendet werden soll:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Nur das Ursprungsdokument wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber es wird nicht an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sende eine vollständige URL beim Ausführen einer Anfrage mit dem gleichen Ursprung, sende nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sende keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Steuert die Einschränkungen, die auf den im `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie durch die Navigation, die zu einem Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder nicht, oder ob der JS-Code es ohne Benutzereingriff initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare einzureichen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Einreichen löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource die Bildschirmausrichtung [sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität lautlos fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem dokumentierten Dokument, einen neuen Browsing-Kontext ohne Erzwungene Sandboxing-Flags zu öffnen. Dies ermöglicht es beispielsweise einem Dritten, eine Anzeige sicher einzubetten, ohne dass dieselben Einschränkungen auf die Seite angewendet werden, auf die die Anzeige verlinkt. Wenn diese Flagge nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder eine neue Registerkarte denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>` unterliegen.
    - `allow-presentation`
      - : Ermöglicht es Einbettungen, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "gleichartige Herkunftsrichtlinie")}} fehlschlagen lässt (möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument die Nutzung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um Zugriff auf nicht partitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext (denjenigen, der `_top` genannt wird) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, aber nur, wenn dies durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigations zu nicht-`http` Protokollen, die im Browser eingebaut sind oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, ist es **stark abzuraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht als das `sandbox`-Attribut gar nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — wie wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem `sandbox`-Attribut, ist der neue Browsing-Kontext denselben `sandbox` Einschränkungen unterworfen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>`s ohne ein gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, wird die Formularübermittlung in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [gleichartigen Herkunftsrichtlinie](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `<iframe>`-src-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) in Firefox (ab Version 65), in Chromium-basierten Browsern und in Safari/iOS die `about:blank`-Seite in den Frame lädt.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn sie relative URLs, wie Ankerlinks, löst.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments entsprechen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. einschließt, obwohl die meisten von ihnen weggelassen werden können, wobei nur der Inhalt des Bodys verbleibt. Dieses Dokument hat `about:srcdoc` als Speicherort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt er auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, um jede relative URL wie Ankerlinks aufzulösen.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus vorhandenen Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Frame-Inhalts. Aufgrund weit verbreiteter Fehlverwendung ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Frame-Inhalt und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Frame-Inhalt und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Scroll-Leiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Frame-Inhalt größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scroll-Leiste anzeigen.
    - `no`
      - : Niemals eine Scroll-Leiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind in der [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript über [`window.parent`](/de/docs/Web/API/Window/parent) einen Verweis auf sein übergeordnetes Fenster erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [gleiche Herkunftsrichtlinie](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Cross-Origin-Kommunikation kann mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<iframe>` die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der lokalen Netzwerk-HTTP-Server zu überprüfen. Daher lösen Benutzeragenten als Sicherheitsvorkehrung nicht das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der Inhalt des `<iframe>` nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Wechsel des Kontexts kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein gängiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel die Live-Probe selbst und das [try it](#try_it)-Beispiel am Anfang sind beide `<iframe>`-Einbindungen von Inhalten von einer anderen MDN-Seite.

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

In diesem Beispiel wird der Quellcode direkt in einem iframe gerendert. Dies kann als Technik verwendet werden, um Skript-Injektionen zu verhindern, wenn benutzergenerierte Inhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

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

- Schreiben Sie zuerst das HTML, indem alles, was Sie in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&` usw.), entkommen wird.
- `&lt;` und `<` repräsentieren das exakt gleiche Zeichen im `srcdoc`-Attribut. Daher machen Sie es zu einer tatsächlichen Escapesequenz im HTML-Dokument, ersetzen Sie jedes `&` (Ampersand) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie jedes `"` (doppeltes Anführungszeichen) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass ein `&quot;` aus diesem Schritt nicht als `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
