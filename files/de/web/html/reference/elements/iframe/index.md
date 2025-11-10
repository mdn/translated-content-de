---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 0bd6cb60f5044c9c81c23929f2bb7ce7987ee6cd
---

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen eingebetteten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine weitere HTML-Seite in die aktuelle ein.

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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungsverlauf](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, das durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert wird.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, erfordert jedes `<iframe>` auf einer Seite erhöhten Speicher- und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, aber überprüfen Sie auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` an. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (zum Beispiel Zugriff auf Mikrofon, Kamera, Batterie, Web-Sharing usw.) basierend auf dem Ursprung der Anfrage.

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Berechtigungsrichtlinie setzt eine weitere Einschränkung über die im {{httpheader("Permissions-Policy")}}-Header angegebene Richtlinie hinaus. Sie ersetzt sie nicht.

- `allowfullscreen`
  - : Auf `true` gesetzt, wenn das `<iframe>` den Vollbildmodus durch Aufruf der [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Auf `true` gesetzt, wenn einem cross-origin `<iframe>` erlaubt werden soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die `<iframe>`-Quelle gesendet werden sollen. Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}
  - : Auf `true` gesetzt, um das `<iframe>` als credentialless zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf Netzwerk-, Cookie- und Speicherndaten, die seinem Ursprung zugeordnet sind. Es nutzt einen neuen Kontext, der lokal zur Laufzeit des übergeordneten Dokuments ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP)-Einbettungsregeln aufgehoben werden, sodass Dokumente mit gesetztem COEP eingebettete Drittanbieter-Dokumente einbinden können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für mehr Details.

- `csp` {{experimental_inline}}
  - : Eine [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "visuellen Viewport")}} erreicht, wie vom Browser definiert.
        Der Zweck besteht darin, die für das Abrufen des Frames erforderliche Netzwerk- und Speicherressource zu vermeiden, bis der Browser einigermaßen sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Reduzierung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein zielgerichteter Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}}-Elemente verwendet werden; das `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder der `windowName`-Parameter in der [`window.open()`](/de/docs/Web/API/Window/open)-Methode. Darüber hinaus wird der Name zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document)-Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthält.
- `referrerpolicy`
  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) gesendet wird, wenn die Ressource des Frames abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber Anfragen zwischen verschiedenen Ursprüngen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL, wenn eine Anfrage innerhalb des gleichen Ursprungs erfolgt, sendet nur den Ursprung, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Bestimmt die Einschränkungen, die auf den im `<iframe>` eingebetteten Inhalt angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder leerzeichengetrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie über die Navigation, die zum Download einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code dies ohne Benutzereingriff initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, keine Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es ermöglicht der Seite auch, [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource [die Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (erstellt zum Beispiel durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem eingebetteten Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf anzuwenden. Dies ermöglicht es beispielsweise, dass eine Drittwerbung sicher in einem Sandkasten enthalten ist, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verlinkt. Wenn dieses Flag nicht enthalten ist, werden eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandboxing-Einschränkungen unterworfen wie das ursprünglich eingebettete `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungsmitteln zu kontrollieren, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "gleiche Ursprungsrichtlinie")}} fehlschlagen lässt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Popup-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das in einem `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den oberen Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den oberen Browsing-Kontext zu navigieren, aber nur, wenn diese Aktion durch eine Benutzerinteraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationsvorgänge zu nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) werden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung wie die einbettende Seite hat, ist es **stark entmutigt**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dadurch das eingebettete Dokument das `sandbox`-Attribut löschen kann — was es nicht sicherer macht, als das `sandbox`-Attribut überhaupt nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn ein Angreifer Inhalte außerhalb eines sandboxed `iframe` darstellen kann — wie wenn der Betrachter das Frame in einem neuen Tab öffnet. Solche Inhalte sollten ebenfalls von einem _separaten Ursprung_ bereitgestellt werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, beim Öffnen eines Popup-Fensters oder eines neuen Tabs von einer eingebetteten Seite in einem `<iframe>` mit dem `sandbox`-Attribut, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die in einem `<iframe>` ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut eingebettet ist, eine neue Seite in einem separaten Tab öffnet, und Formularübermittlungen in diesem neuen Browsing-Kontext stillschweigend fehlschlagen.

- `src`
  - : Die URL der Seite, die eingebettet werden soll. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die den [gleichen Ursprungsrichtlinien](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmgesteuerte Entfernen eines `src`-Attributs von einem `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), in browserbasierten Chromium-Browsern und in Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als basis URL beim Auflösen aller relativen URLs, wie z.B. Ankerlinks.

- `srcdoc`
  - : Inline-HTML, das eingebettet werden soll und das `src`-Attribut überschreibt. Der Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, welches die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten davon weggelassen werden können, sodass nur der Body-Inhalt verbleibt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird auf die URL im `src`-Attribut zurückgegriffen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen aller relativen URLs, wie z.B. Ankerlinks.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie in neuem Inhalt nicht verwenden und versuchen, sie aus bestehendem Inhalt zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, jedoch sollten Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>` Ränder zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Frames. Aufgrund des weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wann der Browser eine Scrollleiste für den Frame bereitstellen soll:
    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer eine Scrollleiste anzeigen.
    - `no`
      - : Niemals eine Scrollleiste anzeigen.

## Skripterstellung

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind in dem [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window) Objekt der eingerahmten Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) Eigenschaft verweist auf das `document` innerhalb des `<iframe>`, genau wie `contentWindow.document`.

Aus dem Inneren eines Frames kann ein Skript eine Referenz auf sein übergeordnetes Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [gleiche Ursprungsrichtlinie](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window`-Objekten nicht zugreifen, wenn das Skript aus einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Übergreifende Kommunikation kann durch Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Navigation auf oberster Ebene in cross-origin Frames

Skripte, die in einem Frame aus dem gleichen Ursprung ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top) Eigenschaft zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) setzen, um die oberste Seite auf eine neue URL umzuleiten. Dieses Verhalten wird als "Navigation auf oberster Ebene" bezeichnet.

Ein Cross-Origin-Frame darf nur dann die oberste Seite umleiten, wenn der Frame {{Glossary("sticky_activation", "klebrige Aktivierung")}} hat. Wenn die Navigation auf oberster Ebene blockiert ist, können Browser entweder die Berechtigung des Benutzers zur Umleitung anfordern oder den Fehler in der Entwicklerkonsole melden (oder beides). Diese Einschränkung durch Browser wird als _Framebusting-Intervention_ bezeichnet. Das bedeutet, dass ein Cross-Origin-Frame nicht sofort die oberste Seite umleiten kann — der Benutzer muss zuvor mit dem Frame interagiert oder die Berechtigung zur Umleitung erteilt haben.

Ein sandboxed Frame blockiert alle Navigationen auf oberster Ebene, es sei denn, die `sandbox`-Attributwerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) eingestellt. Beachten Sie, dass Navigationsberechtigungen auf oberster Ebene vererbt werden, sodass ein verschachteltes Frame nur dann eine Navigation auf oberster Ebene durchführen kann, wenn seine übergeordneten Frames ebenfalls dazu berechtigt sind.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetzendes Element")}} erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Auswirkungen auf `<iframe>` Elemente.

## `error` und `load` Ereignisverhalten

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Bereich der HTTP-Server des lokalen Netzwerks zu sondieren. Daher löst aus Sicherheitsgründen der Benutzeragent das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis bei `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis wird immer ausgelöst, auch wenn der `<iframe>`-Inhalt nicht geladen werden kann.

## Barrierefreiheit

Personen, die mit Hilfstechnologien wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn eingebettete Inhalte interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall für iframes: Einbetten von Inhalten von einer anderen Seite. Beispielsweise sind das Live-Beispiel selbst und das [versuchs es](#try_it)-Beispiel oben beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

{{ EmbedLiveSample('A_basic_iframe', 640, 400) }}

### Quellcode in einem `<iframe>` einbetten

Mit diesem Beispiel wird Quellcode direkt in einem iframe gerendert. Dies kann als Technik verwendet werden, um Skriptinjektionen beim Anzeigen von benutzergenerierten Inhalten zu verhindern, wenn es mit dem `sandbox`-Attribut kombiniert wird.

Beachten Sie, dass bei Verwendung von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die an Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Um es jedoch zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle doppelten Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie stattdessen `'` verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, so dass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300) }}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a>,
        eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Anfangs- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
