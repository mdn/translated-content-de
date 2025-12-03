---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Das **`<iframe>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden linear in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts eingereiht. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, dargestellt durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, erfordert jedes `<iframe>` in einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen für das `<iframe>` basierend auf der Herkunft der Anfrage verfügbar sind (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine Berechtigungsrichtlinie, die durch das `allow`-Attribut angegeben wird, implementiert eine weitere Einschränkung zusätzlich zur im {{httpheader("Permissions-Policy")}}-Header angegebenen Richtlinie. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Setzen Sie diesen Wert auf `true`, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Setzen Sie diesen Wert auf `true`, wenn ein `<iframe>` über Kreuzherkunft die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage nach der Quelle des `<iframe>`s gesendet werden sollen. Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Setzen Sie diesen Wert auf `true`, um das `<iframe>` zugangslos zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seiner Herkunft verbunden sind. Es verwendet einen neuen Kontext, der auf die Lebenszeit des Top-Level-Dokuments beschränkt ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für mehr Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Laden Sie das iframe sofort beim Seitenaufruf (dies ist der Standardwert).
    - `lazy`
      - : Verzögern Sie das Laden des iframe, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert. Der Zweck besteht darin, die zum Abrufen des Rahmens erforderliche Netzwerk- und Speicherbandbreite zu vermeiden, bis der Browser mit einiger Wahrscheinlichkeit feststellt, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung und die Kosten, insbesondere durch Reduzierung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur aufgeschoben, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein ansteuerbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}} Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder der `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Zusätzlich wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthält.
- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) zu senden ist, wenn die Ressource des Rahmens abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "dasselbe Ursprung")}} gesendet, aber bei Anfragen über Kreuz-Ursprünge werden keine Referrer-Informationen gesendet.
    - `strict-origin`
      - : Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitserheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei einer Anfrage aus demselben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitserheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an eine weniger sichere Zieladresse (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`
  - : Kontrolliert die Einschränkungen, die auf den in das `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder leerzeichengetrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie über die Navigation, die zu einem Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link klickte oder ob JS-Code es ohne Benutzerinteraktion initiierte.
    - `allow-forms`
      - : Ermöglicht der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabeüberprüfung aus, sendet keine Daten an einen Webserver oder schließt keinen Dialog.
    - `allow-modals`
      - : Ermöglicht der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch den Empfang des [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignisses.
    - `allow-orientation-lock`
      - : Lässt zu, dass die Ressource die Bildschirmorientierung [sperrt](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (erstellt z. B. durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität ohne Fehlermeldung fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt es einem in einem Sandkasten befindlichen Dokument, einen neuen Browsing-Kontext ohne erzwungene Sandkasten-Flags zu öffnen. Dies ermöglicht es beispielsweise, eine Anzeige eines Drittanbieters sicher im Sandkasten einzubetten, ohne die gleichen Einschränkungen auf die Seite zu übertragen, auf die die Anzeige verweist. Wird dieses Flag nicht aufgenommen, unterliegt eine weitergeleitete Seite, ein Popup-Fenster oder ein neues Tab den gleichen Sandkastenbeschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt es Einbettenden, zu entscheiden, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten darf.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "same-origin policy")}} nicht erfüllt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Ermöglicht der Seite das Ausführen von Skripten (aber nicht das Erstellen von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem im `<iframe>` geladenen Dokument die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), um den Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Lässt die Ressource den Top-Level-Browsing-Kontext (denjenigen, der `_top` genannt wird) navigieren.
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den Top-Level-Browsing-Kontext navigieren, aber nur, wenn es durch eine Benutzerinteraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das `allow-popups`- oder `allow-top-navigation`-Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument dieselbe Herkunft wie die einbettende Seite hat, wird es **nachdrücklich abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument erlaubt, das `sandbox`-Attribut zu entfernen — wodurch es nicht sicherer als das Nichtverwenden des `sandbox`-Attributs wäre.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, Öffnen eines Popup-Fensters oder Öffnen eines neuen Tabs aus einer eingebetteten Seite innerhalb eines `<iframe>`s mit dem `sandbox`-Attribut unterliegt der neue Browsing-Kontext den gleichen `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine eingebettete Seite innerhalb eines `<iframe>`s ohne ein gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut einen neuen Tab öffnet, schlägt die Formularübermittlung in diesem neuen Kontext stillschweigend fehl.

- `src`
  - : Die URL der einzubindenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen des `src`-Attributs eines `<iframe>`s (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Rahmen in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie Ankerlinks.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`-, `<body>`-Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können und nur der Body-Inhalt bleibt. Dieses Dokument hat `about:srcdoc` als Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird die URL im `src`-Attribut als Fallback verwendet.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn relative URLs aufgelöst werden, wie Ankerlinks.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Bildlaufleiste für den Rahmen bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer ist als seine Abmessungen.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im Pseudo-Array [`window.frames`](/de/docs/Web/API/Window/frames) enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der im Rahmen enthaltenen Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `Dokument` innerhalb des `<iframe>`, genauso wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript über die [`window.parent`](/de/docs/Web/API/Window/parent)-Eigenschaft auf das übergeordnete Fenster zugreifen.

Der Skriptzugriff auf die Inhalte eines Rahmens unterliegt der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript aus einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Rahmens, die auf das übergeordnete Fenster zugreifen.
Eine Kommunikation über Kreuz-Ursprünge kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in Kreuz-Ursprung-Frames

Skripte, die in einem Frame mit demselben Ursprung ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top)-Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Ebene der Seite auf einen neuen Standort umzuleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Frame mit Kreuz-Ursprung darf die oberste Ebene der Seite nur dann über `top` umleiten, wenn der Frame {{Glossary("sticky_activation", "starke Aktivierung")}} hat.
Wenn die Top-Navigation blockiert ist, können Browser entweder eine Benutzererlaubnis zum Umleiten anfordern oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Einschränkung durch Browser wird _Framebusting-Intervention_ genannt.
Dies bedeutet, dass ein Frame mit Kreuz-Ursprung die oberste Ebene der Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Erlaubnis gegeben haben, umzuleiten.

Ein sandbesetzter Frame blockiert alle Top-Navigationen, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass die Top-Navigationsberechtigungen vererbt werden, sodass ein verschachtelter Frame eine Top-Navigation nur dann durchführen kann, wenn seine übergeordneten Frames dies ebenfalls dürfen.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>` die Anpassung der Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkung auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu sondieren. Aus Sicherheitsgründen lösen Benutzeragenten daher nicht das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, auch wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Menschen, die mit unterstützenden Technologien wie einem Bildschirmleser navigieren, können das [`title` attribute](/de/docs/Web/HTML/Reference/Global_attributes/title) in einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt treffend beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, besonders für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite auf <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: Zum Einbetten von Inhalten von einer anderen Seite. Zum Beispiel sind das Live-Beispiel selbst und das [try it](#try_it)-Beispiel oben beide `<iframe>`-Einbindungen von Inhalten einer anderen MDN-Website.

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

### Quellcode in einem `<iframe>` einbetten

Dieses Beispiel rendert direkt Quellcode in einem iframe. Dies kann als Technik verwendet werden, um Skriptinjektionen zu verhindern, wenn Benutzergenerierte Inhalte angezeigt werden sollen, wenn dies mit dem `sandbox`-Attribut kombiniert wird.

Beachten Sie, dass bei der Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` ausdrücklich als Basis-URL angeben.

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

- Zuerst, schreiben Sie das HTML aus und ersetzen alles, was Sie in einem normalen HTML-Dokument verändern würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren genau dasselbe Zeichen im `srcdoc`-Attribut. Um daraus eine echte Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Ampersands (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;` und `&amp;` zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` verwenden, sollten Sie `'` stattdessen mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

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
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
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
