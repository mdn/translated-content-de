---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element stellt einen geschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar und bettet eine andere HTML-Seite in die aktuelle ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _übergeordneter Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext – derjenige ohne Eltern – ist normalerweise das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung darstellt, erfordert jedes `<iframe>` auf einer Seite erhöhten Speicherbedarf und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, prüfen Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Features dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Freigabe usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie implementiert eine weitere Einschränkung zusätzlich zu der im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Auf `true` setzen, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` setzen, wenn einem Cross-Origin-`<iframe>` erlaubt wird, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>`s gesendet werden. Siehe [Verwenden der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` setzen, um das `<iframe>` zustandslos zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherressourcen, die mit seinem Ursprung verknüpft sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Dafür können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit festgelegtem COEP externe Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource erzwungen wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das `<iframe>` laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht hat, wie vom Browser definiert. Der Zweck ist, die Netz- und Speicherbandbreite zu vermeiden, die benötigt wird, um den Frame zu laden, bis der Browser vernünftigerweise sicher ist, dass er benötigt wird. Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere indem die anfänglichen Ladezeiten der Seite reduziert werden.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein ansteuerbarer Name für den eingebetteten Browsing-Kontext. Dieser kann im Attribut `target` der Elemente {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} verwendet werden; im Attribut `formtarget` der Elemente {{HTMLElement("input")}} oder {{HTMLElement("button")}}; oder im Parameter `windowName` in der Methode [`window.open()`](/de/docs/Web/API/Window/open). Zusätzlich wird der Name zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document), das eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.

- `privateToken` {{experimental_inline}}
  - : Enthält eine Zeichenfolgenrepräsentation eines Optionsobjekts, das eine [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using)-Operation repräsentiert; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Dictionary-Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken). IFrames mit diesem Attribut können Operationen initiieren, wie z.B. das Ausstellen oder Einlösen von Tokens, wenn deren eingebetteter Inhalt geladen wird.

- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Resource des Frames abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL bei einer same-origin-Anfrage, sendet nur den Ursprung, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leakt.

- `sandbox`
  - : Kontrolliert die Beschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewandt werden. Der Wert des Attributs kann entweder leer sein, um alle Beschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens enthalten, um bestimmte Beschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien durch ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu senden. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden wird keine Eingabeüberprüfung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu erhalten.
    - `allow-orientation-lock`
      - : Erlaubt es der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Pop-ups (erstellt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem dokumentierten Sandbox-Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandbox-Flags darauf zu erzwingen. Dies ermöglicht es beispielsweise, eine externe Anzeige sicher in einer Sandbox zu betreiben, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verweist. Wenn diese Flagge nicht enthalten ist, unterliegt eine weitergeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungen, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "same-origin policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Aktion nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext (den namens `_top`) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, aber nur, wenn sie von einer Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http` Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch die Schlüsselwörter `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, ist es **stark abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen – was es nicht sicherer macht, als gar nicht das `sandbox`-Attribut zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann – zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um mögliche Schäden zu begrenzen.

    > [!NOTE]
    > Wenn der Benutzer weitergeleitet wird, ein Popup-Fenster öffnet oder einen neuen Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut öffnet, unterliegt der neue Browsing-Kontext den gleichen `sandbox` Beschränkungen. Dies kann zu Problemen führen – zum Beispiel, wenn eine Seite innerhalb eines `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut, das darauf gesetzt ist, eine neue Seite in einem separaten Tab öffnet, wird das Absenden von Formularen im neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der Seite, um sie einzubetten. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS `about:blank` im Frame laden lässt.

    > [!NOTE]
    > Die Seite `about:blank` verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. umfasst, obwohl die meisten von ihnen weggelassen werden können, sodass nur der Körperinhalt übrig bleibt. Dieses Dokument hat `about:srcdoc` als seine Lokation. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt es auf die im `src`-Attribut angegebene URL zurück.

    > [!NOTE]
    > Die Seite `about:srcdoc` verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs, wie Ankerlinks, aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Abgeschriebene Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um dieses Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL zu einer ausführlichen Beschreibung des Inhalts des Rahmens. Aufgrund weit verbreitetem Missbrauch ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rahmen.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rahmen.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für den Frame bereitstellen soll:
    - `auto`
      - : Nur, wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft auf das [`window`](/de/docs/Web/API/Window)-Objekt der gerahmten Ressource zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` im `<iframe>`, genau wie `contentWindow.document`.

Von innerhalb eines Frames aus kann ein Skript eine Referenz auf sein übergeordnetes Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Cross-Origin-Kommunikation kann durch die Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Cross-Origin-Frames

Skripte, die in einem Frame mit demselben Ursprung ausgeführt werden, können auf die Eigenschaft [`Window.top`](/de/docs/Web/API/Window/top) zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite auf einen neuen Ort umzuleiten. Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Cross-Origin-Frame darf die oberste Seite nur dann umleiten, wenn der Frame {{Glossary("sticky_activation", "sticky activation")}} hat. Wenn die Top-Navigation blockiert wird, können Browser entweder die Erlaubnis des Benutzers zur Umleitung einholen oder den Fehler in der Entwicklerkonsole melden (oder beides). Diese Einschränkung der Browser wird als _framebusting intervention_ bezeichnet. Das bedeutet, dass ein Cross-Origin-Frame die oberste Seite nicht sofort umleiten kann – der Benutzer muss vorher mit dem Frame interagiert haben oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandboxed Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt. Beachten Sie, dass Top-Navigationsberechtigungen vererbt werden, sodass ein geschachteltes Frame nur dann eine Top-Navigation durchführen kann, wenn es auch seinen übergeordneten Frames erlaubt ist.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seiner Box mit der {{cssxref("object-position")}}-Eigenschaft einzustellen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keinen Effekt auf `<iframe>`-Elemente.

## `error` und `load`-Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s gefeuert werden, könnten verwendet werden, um den URL-Raum lokaler Netzwerk-HTTP-Server zu sondieren. Daher feuern Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis nicht bei `<iframe>`s, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title` attribute](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt kurz und prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite bei <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: das Einbetten von Inhalten einer anderen Seite. Zum Beispiel sind das Live-Beispiel selbst und das [probiere es aus](#try_it)-Beispiel oben beides `<iframe>`-Einbettungen von Inhalten einer anderen MDN-Seite.

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

Dieses Beispiel rendert den Quellcode direkt in einem iframe. Dies kann als Technik zur Verhinderung von Skriptinjektion verwendet werden, wenn Benutzerinhalte angezeigt werden, in Kombination mit dem `sandbox`-Attribut.

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

So schreiben Sie Escape-Sequenzen bei der Verwendung von `srcdoc`:

- Schreiben Sie zuerst das HTML aus und maskieren Sie alles, was Sie in einem normalen HTML-Dokument maskieren würden (z.B. `<`, `>`, `&` usw.).
- `&lt;` und `<` stellen dasselbe Zeichen im `srcdoc`-Attribut dar. Um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Kaufmännischen Und (&) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;` und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, ersetzen Sie `'` durch `&apos;`). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

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
          >Phrasierung von Inhalten</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
