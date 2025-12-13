---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
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

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontextes werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontextes linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, repräsentiert durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentumgebung darstellt, benötigt jedes `<iframe>` in einer Seite mehr Speicher und andere Rechenressourcen. Theoretisch können Sie so viele `<iframe>`s verwenden, wie Sie möchten, überprüfen Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow`
  - : Legt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<iframe>` fest. Die Richtlinie definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (z.B. Zugriff auf das Mikrofon, die Kamera, die Batterie, den Web-Share, etc.).

    Siehe [iframes](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) im Abschnitt `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut festgelegte Berechtigungsrichtlinie stellt eine weitere Einschränkung zusätzlich zu der in der {{httpheader("Permissions-Policy")}}-Überschrift festgelegten Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`
  - : Setzen Sie `true`, wenn das `<iframe>` den Vollbildmodus durch Aufruf der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltet betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : Setzen Sie `true`, wenn einem ursprüngsübergreifenden `<iframe>` erlaubt wird, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltet betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{non-standard_inline}} {{deprecated_inline}}
  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die Quelle des `<iframe>`s gesendet werden sollen. Einzelheiten finden Sie unter [Die Topics API verwenden](/de/docs/Web/API/Topics_API/Using).

- `credentialless` {{Experimental_Inline}}
  - : Setzen Sie `true`, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass seine Inhalte in einem neuen, ephemeren Kontext geladen werden. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der an die Lebensdauer des obersten Dokuments lokal ist. Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit COEP Einstellung Drittanbieter-Dokumente einbetten können, die dies nicht sind. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}
  - : Eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe [`HTMLIFrameElement.csp`](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Der Standardwert ist `150`.
- `loading`
  - : Gibt an, wann der Browser das iframe laden soll:
    - `eager`
      - : Lädt das iframe sofort beim Seitenladen (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des iframes, bis es eine berechnete Entfernung vom {{Glossary("visual_viewport", "sichtbaren Viewport")}} erreicht, wie vom Browser definiert.
        Der Zweck besteht darin, die Netzwerk- und Speicherbandbreite zu vermeiden, die erforderlich ist, um den Frame abzurufen, bis der Browser mit hoher Wahrscheinlichkeit davon ausgeht, dass er benötigt wird.
        Dies verbessert die Leistung und senkt die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Verkürzung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verschoben, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein Zielname für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der Elemente {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} verwendet werden; im `formtarget`-Attribut der Elemente {{HTMLElement("input")}} oder {{HTMLElement("button")}}; oder im `windowName`-Parameter in der Methode [`window.open()`](/de/docs/Web/API/Window/open). Darüber hinaus wird der Name zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document), die eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.
- `referrerpolicy`
  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) zu senden ist, wenn die Ressource des Frames abgerufen wird:
    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Urspung")}}e ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt sein: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`
      - : Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt sein. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Es wird ein Referrer für {{Glossary("Same-origin_policy", "gleich Herkunft")}} gesendet, aber bei ursprungsübergreifenden Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`
      - : Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Senden Sie eine vollständige URL bei einer Navigation im selben Ursprung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er die Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`
  - : Steuert die auf die eingebetteten Inhalte im `<iframe>` angewendeten Einschränkungen. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:
    - `allow-downloads`
      - : Erlaubt das Herunterladen von Dateien über ein Element {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut sowie über Navigationsvorgänge, die zum Herunterladen einer Datei führen. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder der Vorgang ohne Benutzerinteraktion durch JavaScript-Code initiiert wurde.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu senden. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch, dass die Seite das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) empfangen kann.
    - `allow-orientation-lock`
      - : Ermöglicht es der Ressource, die [Bildschirmausrichtung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (erstellt z.B. durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt eine solche Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed-Dokument einen neuen Browsing-Kontext zu öffnen, ohne die Sandbox-Flags auf diesen anzuwenden. Dadurch kann z.B. eine Drittanbieter-Werbung sicher in einem Sandbox-Modus angezeigt werden, ohne die gleichen Einschränkungen auf die Seite, auf die die Anzeige verweist, zu erzwingen. Wenn dieses Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Emittenten zu kontrollieren, ob ein Iframe eine [Präsentationssitzung starten kann](/de/docs/Web/API/PresentationRequest).
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als aus einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} verletzt (möglicherweise wird der Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite das Ausführen von Skripten (jedoch nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist die Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren, jedoch nur, wenn dies durch eine Benutzeraktion initiiert wurde.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu Nicht-`http`-Protokollen, die im Browser integriert oder [von einer Website registriert wurden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch vom `allow-popups`- oder `allow-top-navigation`-Schlüsselwort aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird **dringend davon abgeraten**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da das eingebettete Dokument dadurch das `sandbox`-Attribut entfernen kann, was es nicht sicherer macht als die Verwendung des `sandbox`-Attributs überhaupt nicht.
    > - Das Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann, z.B. wenn der Betrachter den Frame in einem neuen Tab öffnet. Solche Inhalte sollten auch von _einem separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Umleiten des Benutzers, beim Öffnen eines Popup-Fensters oder beim Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit `sandbox`-Attribut unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite, die in ein `<iframe>` eingebettet ist, ohne dass das Attribut `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` darauf gesetzt wurde, eine neue Website in einem separaten Tab öffnet, schlägt das Formular Absenden in diesem neuen Browsing-Kontext stillschweigend fehl.

- `src`
  - : Die URL der einzubettenden Seite. Verwenden Sie einen Wert von `about:blank`, um eine leere Seite einzubetten, die den [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy#inherited_origins) erfüllt. Beachten Sie auch, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basiskatalog beim Auflösen relativer URLs, wie z.B. Ankerlinks.

- `srcdoc`
  - : Integriertes HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments entsprechen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. beinhaltet, obwohl die meisten von ihnen weggelassen werden können, das nur den Inhalt des Körpers hinterlässt. Dieses Dokument hat `about:srcdoc` als seinen Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird er auf die URL im `src`-Attribut zurückgreifen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basiskatalog beim Auflösen relativer URLs, wie z.B. Ankerlinks.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Der Standardwert ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehendem Inhalt zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umliegenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer lang-beschriebenen Beschreibung der Inhalte des Frames. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Frames und ihren oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Frames und ihren linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}
  - : Gibt an, wenn der Browser für den Frame eine Bildlaufleiste bereitstellen soll:
    - `auto`
      - : Nur wenn die Inhalte des Frames größer sind als ihre Abmessungen.
    - `yes`
      - : Immer eine Bildlaufleiste anzeigen.
    - `no`
      - : Niemals eine Bildlaufleiste anzeigen.

## Skripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames) Pseudo-Array enthalten.

Mit dem DOM [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Objekt können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der eingezogenen Ressource über die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft zugreifen. Die [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument)-Eigenschaft bezieht sich auf das `Dokument` innerhalb des `<iframe>`, genau wie `contentWindow.document`.

Aus dem Inneren eines Frames kann ein Skript eine Referenz auf sein Elternfenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugang zu den Inhalten eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Skripte können die meisten Eigenschaften anderer `window`-Objekte nicht zugreifen, wenn das Skript aus einem anderen Ursprung geladen wurde, einschließlich Skripte innerhalb eines Frames, die auf das Elternfenster zugreifen. Ursprungsübergreifende Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

### Top-Navigation in ursprungsübergreifenden Frames

Skripte, die in einem gleichen Ursprungs-Frame ausgeführt werden, können auf die [`Window.top`](/de/docs/Web/API/Window/top) zugreifen und [`window.top.location`](/de/docs/Web/API/Window/location) einstellen, um die oberste Ebene der Seite an einen neuen Ort umzuleiten. Dieses Verhalten wird als "Top-Navigation" bezeichnet.

Ein Ursprungsübergreifender Frame darf die oberste Ebene der Seite nur dann umleiten, wenn der Frame {{Glossary("sticky_activation", "sticky activation")}} hat. Wenn die Top-Navigation blockiert wird, können Browser entweder um Benutzer die Erlaubnis bitten, um umzuleiten oder den Fehler in der Entwicklerkonsole melden (oder beides). Diese Einschränkung durch Browser wird als _framebusting intervention_ bezeichnet. Das bedeutet, dass ein Ursprungsübergreifender Frame die oberste Ebene der Seite sofort umleiten darf — der Benutzer muss zuvor mit dem Frame interagiert haben oder die Erlaubnis haben zu umleiten.

Ein verankerter Frame blockiert jede Top-Navigation, es sei denn, die `sandbox`-Attributswerte sind auf [`allow-top-navigation`](#allow-top-navigation) oder [`allow-top-navigation-by-user-activation`](#allow-top-navigation-by-user-activation) eingestellt. Beachten Sie, dass die Top-Navigator-Erlaubnisse vererbt werden, sodass ein verschachtelter Frame nur dann eine Top-Navigation ausführen kann, wenn seine Elternframes dies auch dürfen.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<iframe>` die Position der eingebetteten Dokumente innerhalb seiner Box mittels der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<iframe>`-Elemente.

## Verhalten der `error`- und `load`-Ereignisse

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden können, wurden verwendet, um den URL-Raum der HTTP-Server im lokalen Netzwerk zu erkunden. Daher lösen Benutzeragenten aus Sicherheitsgründen das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s nicht aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn das `<iframe>`-Inhalt nicht geladen werden konnte.

## Barrierefreiheit

Personen, die mit unterstützender Technologie, wie z.B. einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalte zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was eingebettete Inhalte sind. Diese Kontextverschiebung kann verwirrend und zeitaufwändig sein, insbesondere bei Seiten mit mehreren `<iframe>`s und/oder wenn die eingebetteten Inhalte interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: Inhalte von einer anderen Seite einbetten. Zum Beispiel ist das Live-Beispiel selbst und das [probieren Sie es aus](#try_it)-Beispiel oben, beide `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Seite.

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

### Einbettung von Quellcode in einem `<iframe>`

Dieses Beispiel rendert den Quellcode direkt in einem iframe. Dies kann als Technik verwendet werden, um Skripteinspeisungen zu verhindern, wenn Sie von Benutzern generierte Inhalte anzeigen und mit dem `sandbox`-Attribut kombiniert werden.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Ankerlinks verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` explizit als Basiskatalog angeben.

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

- Zuerst schreiben Sie das HTML auf, indem Sie alles entkommen, was Sie in einem normalen HTML-Dokument entkommen würden (wie `<`, `>`, `&`, etc.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc`-Attribut. Um es also tatsächlich als Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie jedes "&" (`&`) mit `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie eventuell doppelte Anführungszeichen (`"`) mit `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig geschlossen wird (wenn Sie `'` anstelle verwenden, sollten Sie `'` mit `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wurde, nicht zu `&amp;quot;` wird.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tags sind obligatorisch.</td>
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
