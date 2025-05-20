---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 11da1e12a26a23447ec3e5243a83d4238a3ebd19
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen eingebetteten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _übergeordneter Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne übergeordneten Kontext — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhte Speicher- und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`

  - : Definiert eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>`. Die Richtlinie definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Sharing usw.).

    Siehe [Iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Berechtigungsrichtlinie implementiert eine zusätzliche Einschränkung zu der in der {{httpheader("Permissions-Policy")}}-Header spezifizierten Richtlinie. Sie ersetzt sie nicht.

- `allowfullscreen`

  - : Setzen Sie auf `true`, wenn das `<iframe>` den Vollbildmodus durch Aufruf der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wird als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Setzen Sie auf `true`, wenn ein Cross-Origin-`<iframe>` berechtigt sein soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) auszulösen.

    > [!NOTE]
    > Dieses Attribut gilt als veraltetes Attribut und wird als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage zur `<iframe>`-Quelle gesendet werden sollen. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

- `credentialless` {{Experimental_Inline}}

  - : Setzen Sie auf `true`, um das `<iframe>` als credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprungsort assoziiert sind. Es verwendet einen neuen Kontext, der an die Lebensdauer des obersten Dokuments gebunden ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht haben. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für mehr Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Laden Sie das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögern Sie das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht hat, wie vom Browser definiert. Ziel ist es, den Netzwerk- und Speicherbandbreitenverbrauch zu vermeiden, der zum Abrufen des Frames erforderlich ist, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird. Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere indem die initialen Ladezeiten der Seite reduziert werden.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein ansprechbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder im `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) zu senden ist, wenn die Ressource des Frames abgerufen wird:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung beinhalten jedoch weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für den {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardwert)
      - : Sendet eine vollständige URL bei einer Anfrage zum gleichen Ursprung, sendet jedoch nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leakt.

- `sandbox`

  - : Kontrolliert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien durch ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zu einem Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Nutzerinteraktion ausgelöst hat.
    - `allow-forms`
      - : Ermöglicht der Seite, Formulare zu übermitteln. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, das Abschicken löst jedoch keine Eingabevalidierung aus, sendet Daten an einen Webserver oder schließt einen Dialog.
    - `allow-modals`
      - : Ermöglicht es der Seite, modale Fenster zu öffnen durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} erlaubt ist, unabhängig von diesem Schlüsselwort. Es erlaubt auch der Seite, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Ermöglicht es der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Ermöglicht Popups (erstellt zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Ermöglicht einem eingebetteten Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf anzuwenden. Dies erlaubt es zum Beispiel, eine Drittanbieteranzeige sicher zu sandboxen, ohne die gleichen Einschränkungen auf die Seite aufzuerlegen, auf die die Anzeige verweist. Wenn dieses Flag nicht enthalten ist, wird eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Beschränkungen unterworfen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Ermöglicht es Embedders zu kontrollieren, ob ein iframe eine [Präsentationssession](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht es der Seite, Skripte auszuführen (aber keine Popupfenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht zulässig.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Ermöglicht einem Dokument, das in das `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugang zu nicht partitionierten Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext (den als `_top` bezeichneten) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, aber nur, wenn sie durch ein Benutzerinteraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Ermöglicht Navigationen zu nicht-`http`-Protokollen, die in den Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das `allow-popups`- oder `allow-top-navigation`-Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **stark entmutigt**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies das eingebettete Dokument das `sandbox`-Attribut entfernen lässt — wodurch es nicht sicherer ist, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn der Benutzer umgeleitet wird, ein Popup-Fenster geöffnet oder ein neuer Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem Attribut `sandbox` geöffnet wird, ist der neue Browsing-Kontext den gleichen `sandbox`-Einschränkungen unterworfen. Dies kann zu Problemen führen — zum Beispiel, wenn eine in ein `<iframe>` eingebettete Seite, die kein Attribut `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` aufweist, eine neue Seite in einem separaten Tab öffnet, wird das Absenden von Formularen in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen eines `<iframe>`-src-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS `about:blank` im Frame geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie z.B. Ankerlinks.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, die `<html>`, `<body>`-Tags usw. umfasst, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Content bleibt. Dieses Dokument wird `about:srcdoc` als Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird es auf die URL im `src`-Attribut zurückgreifen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs wie Ankerlinks aufgelöst werden.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen User Agents unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standardwert) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, jedoch sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im Pseudofeld [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingebetteten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Frames kann ein Skript mit [`window.parent`](/de/docs/Web/API/Window/parent) auf sein übergeordnetes Fenster verweisen.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>` die Anpassung der Position des eingebetteten Dokuments innerhalb seiner Box durch die {{cssxref("object-position")}}-Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<iframe>`-Elemente.

## `error`- und `load`-Ereignisverhalten

Die `error`- und `load`-Ereignisse, die bei `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks zu untersuchen. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis bei `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, auch wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit Hilfstechnologien wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Diese Kontextänderung kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktiven Inhalt wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiges Anwendungsfall für iframes: das Einbetten von Inhalten von einer anderen Seite. Zum Beispiel ist das Live-Sample selbst und das [try it](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skript-Injection zu verhindern, wenn nutzergenerierte Inhalte angezeigt werden sollen, in Kombination mit dem `sandbox`-Attribut.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie ausdrücklich `about:srcdoc` als Basis-URL angeben.

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

Hier erfahren Sie, wie Sie Escape-Sequenzen bei Verwendung von `srcdoc` schreiben:

- Schreiben Sie zuerst das HTML aus, indem Sie alles escapen, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren im `srcdoc`-Attribut das gleiche Zeichen. Um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jedes kaufmännische Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie jedes Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig abgeschlossen wird (wenn Sie `'` verwenden, ersetzen Sie `'` durch `&apos;` anstelle von dieser). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
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
