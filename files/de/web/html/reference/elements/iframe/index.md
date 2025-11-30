---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist normalerweise das Browserfenster, repräsentiert durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext ein vollständiges Dokumentumfeld ist, erfordert jedes `<iframe>` in einer Seite erhöhten Speicher- und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, jedoch sollten Sie auf Leistungsprobleme achten.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Spezifiziert eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>`. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Sharing, etc.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine per `allow`-Attribut spezifizierte Berechtigungsrichtlinie stellt eine weitere Einschränkung zusätzlich zur im {{httpheader("Permissions-Policy")}}-Header spezifizierten Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Wird auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Wird auf `true` gesetzt, wenn ein Corpüstebenen `<iframe>` erlauben sollte, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>`s gesendet werden sollten. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Wird auf `true` gesetzt, um das `<iframe>` credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der auf die Lebensdauer des obersten Dokuments beschränkt ist. Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Dokumente Dritter einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content-Security-Richtlinie](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lade das iframe sofort beim Seitenladen (dies ist der Standardwert).
    - `lazy`
      - : Verzögere das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie es der Browser definiert.
        Der Zweck ist, den erforderlichen Netzwerk- und Speicher-Bandbreitebedarf zum Abrufen des Rahmens zu vermeiden, bis der Browser relativ sicher ist, dass es benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Reduzierung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur dann verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder der `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Zusätzlich wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document) Objekte, die eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.
- `referrerpolicy`
  - : Gibt an, welche [referrer](/de/docs/Web/API/Document/referrer) gesendet werden soll, wenn die Ressource des Rahmens abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichens Ursprungs")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei einer Anfrage am selben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sandbox`
  - : Kontrolliert die Einschränkungen, die auf den eingebetteten Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder space-separated Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut, sowie durch die Navigation, die zu einem Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der JavaScript-Code ihn ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare abzusenden. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite das Öffnen von Modal-Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis zu empfangen.
    - `allow-orientation-lock`
      - : Erlaubt der Ressource die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Pop-ups (erstellt zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, wird eine solche Funktionalität stillschweigend fehlschlagen.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem in der Sandbox befindlichen Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf zu erzwingen. Dies wird zum Beispiel ein Drittanbieter-Werbeelement sicher in einer Sandbox platzieren, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, zu der die Anzeige verlinkt ist. Wenn dieses Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab den gleichen Sandbox-Einschränkungen wie das Ursprungs-`<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungen zu entscheiden, ob ein `<iframe>` eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin_policy", "gleiche Ursprungsrichtlinie")}} (potenziell verhindernder Zugang zu [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einigen JavaScript-APIs) verletzt.
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts (derjenige, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontexts, aber nur, wenn dies durch eine Benutzerhandlung initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die in Browser integriert oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **dringend abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox`-Attribut zu entfernen — was es nicht sicherer macht als wenn das `sandbox`-Attribut überhaupt nicht verwendet würde.
    > - Eine Sandbox ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — wie wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Bei der Weiterleitung des Benutzers, dem Öffnen eines Popup-Fensters oder dem Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die innerhalb eines `<iframe>` ohne ein auf ihr gesetztes `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, wird das Absenden eines Formulars in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die die [same-origin-policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) einhält. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `<iframe>`'s src-Attributes (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) verursacht, dass `about:blank` im Frame in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn irgendwelche relativen URLs, wie Ankerlinks, aufgelöst werden.

- `srcdoc`
  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags, etc. enthält, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt verbleibt. Dieses Dokument wird `about:srcdoc` als seinen Speicherort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, fällt es auf die URL im `src`-Attribut zurück.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, wenn irgendwelche relativen URLs, wie Ankerlinks, aufgelöst werden.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht länger von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um dieses Frame. Der Wert `0` entfernt den Rahmen um dieses Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund weitverbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Scrollbar für das Frame bereitstellen soll:
    - `auto`
      - : Nur dann, wenn der Inhalt des Rahmens größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollbar anzeigen.
    - `no`
      - : Nie eine Scrollbar anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der gerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `document` innerhalb des `<iframe>`, gleich wie `contentWindow.document`.

Von innerhalb eines Rahmens kann ein Skript eine Referenz auf sein Elternfenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Skriptzugriff auf den Inhalt eines Rahmens unterliegt der [same-origin-policy](/de/docs/Web/Security/Defenses/Same-origin_policy).
Skripte können auf die meisten Eigenschaften in anderen `window`-Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripte innerhalb eines Rahmens, die auf den Elternrahmen zugreifen.
Eine cross-origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in cross-origin-Frames

Skripte, die in einem gleichen Ursprungsrahmen ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top)-Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) festlegen, um die oberste Seite zu einer neuen Location umzuleiten.
Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein cross-origin-Frame darf die oberste Seite nur dann mit `top` umleiten, wenn der Frame {{Glossary("sticky_activation", "sticky activation")}} hat.
Wenn die Top-Navigation blockiert ist, können Browser entweder um die Erlaubnis des Benutzers bitten, umzuleiten, oder den Fehler in der Entwicklerkonsole melden (oder beides).
Diese Beschränkung durch Browser wird als _framebusting intervention_ bezeichnet.
Das bedeutet, dass ein cross-origin-Frame die oberste Seite nicht sofort umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis zur Umleitung erteilt haben.

Ein sandboxed-Frame blockiert alle Top-Navigation, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) gesetzt.
Beachten Sie, dass Top-Navigationsberechtigungen vererbt werden, sodass ein verschachtelter Frame nur dann eine Top-Navigation durchführen kann, wenn seine Eltern-Frames dies ebenfalls erlauben.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "erstattetes Element")}} erlaubt das `<iframe>` die Position des eingebetteten Dokuments innerhalb seines Kastens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks zu erkunden. Daher lösen Benutzeragenten aus Sicherheitsgründen das [Fehler](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s nicht aus, und das [Laden](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn der `<iframe>`-Inhalt aufgrund eines Fehlers geladen wurde.

## Barrierefreiheit

Personen, die mit Hilfstechnologie wie einem Screenreader navigieren, können das [`title` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere bei Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktiven Inhalt wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [Probiere es aus](#try_it) Beispiel oben beides `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

{{EmbedLiveSample('A_basic_iframe', 640, 400)}}

### Einbetten von Quellcode in ein `<iframe>`

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skripteinfügeangriffe zu verhindern, wenn es mit dem `sandbox`-Attribut kombiniert wird.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` als Basis-URL explizit angeben.

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

Hier erfahren Sie, wie Fluchtsequenzen bei der Verwendung von `srcdoc` geschrieben werden:

- Zuerst schreiben Sie das HTML aus, indem Sie alles, was Sie in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&`, etc.), maskieren.
- `&lt;` und `<` stellen im `srcdoc`-Attribut dasselbe Zeichen dar. Daher, um es zur tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Et-Zeichen (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie doppelte Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` stattdessen verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt generiert wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalte</a
        >, eingebettete Inhalte, interaktive Inhalte, spürbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
