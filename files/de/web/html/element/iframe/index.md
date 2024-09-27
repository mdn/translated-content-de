---
title: "<iframe>: Das Inline Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen geschachtelten [Browsing-Kontext](/de/docs/Glossary/browsing_context) und bettet eine andere HTML-Seite in die aktuelle ein.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und erlaubt URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird _übergeordneter Browsing-Kontext_ genannt. Der _oberste_ Browsing-Kontext — derjenige ohne übergeordneten Kontext — ist normalerweise das Browserfenster, repräsentiert durch das [`Window`](/de/docs/Web/API/Window)-Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine komplette Dokumentumgebung ist, benötigt jedes `<iframe>` auf einer Seite mehr Arbeitsspeicher und andere Rechnerressourcen. Theoretisch können Sie beliebig viele `<iframe>`s verwenden, überprüfen Sie jedoch auf Leistungsprobleme.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `allow`

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<iframe>` an. Die Policy definiert, welche Funktionen dem `<iframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen (z.B. Zugriff auf Mikrofon, Kamera, Batterie, Web-Share usw.).

    Siehe [iframes](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) im `Permissions-Policy`-Thema für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut angegebene Permissions Policy stellt eine zusätzliche Einschränkung über die im {{httpheader("Permissions-Policy")}}-Header angegebene Policy dar. Sie ersetzt sie nicht.

- `allowfullscreen`

  - : Setzen Sie diesen Wert auf `true`, wenn das `<iframe>` den Vollbildmodus durch Aufrufen der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aktivieren kann.

    > [!NOTE]
    > Dieses Attribut wird als veraltet angesehen und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Setzen Sie diesen Wert auf `true`, wenn einem Cross-Origin-`<iframe>` erlaubt werden soll, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufzurufen.

    > [!NOTE]
    > Dieses Attribut wird als veraltet angesehen und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, wenn vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>`s gesendet werden sollen. Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

- `credentialless` {{Experimental_Inline}}

  - : Setzen Sie diesen Wert auf `true`, um das `<iframe>` ohne Anmeldeinformationen zu machen, was bedeutet, dass sein Inhalt in einem neuen, temporären Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdaten, die mit seinem Ursprung verknüpft sind. Es verwendet einen neuen Kontext, der lokal zur Lebensdauer des obersten Dokuments ist. Im Gegenzug können die Einbettungsregeln von {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit eingestelltem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für weitere Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe `[HTMLIFrameElement.csp](/de/docs/Web/API/HTMLIFrameElement/csp) für Details.

- `height`
  - : Die Höhe des Frames in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das iframe laden soll:

    - `eager`
      - : Lädt das iframe sofort beim Seitenaufruf (dies ist der Standardwert).
    - `lazy`

      - : Verzögert das Laden des iframes, bis es sich in einer berechneten Entfernung vom [visuellen Viewport](/de/docs/Glossary/visual_viewport) befindet, wie vom Browser definiert.
        Die Absicht ist, das Netzwerk- und Speicherbandbreite zu vermeiden, die erforderlich ist, um den Frame abzurufen, bis der Browser vernünftigerweise sicher ist, dass es benötigt wird.
        Dies verbessert die Leistung und Kosten in den meisten typischen Anwendungsfällen, insbesondere durch Verkürzung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Anti-Tracking-Maßnahme.

- `name`
  - : Ein anvisierbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}} oder {{HTMLElement("base")}}-Elemente; dem `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}}-Elemente; oder dem `windowName`-Parameter der [`window.open()`](/de/docs/Web/API/Window/open)-Methode verwendet werden.
- `referrerpolicy`

  - : Gibt an, welcher [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Frame-Ressource gesendet werden soll:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}}-Header wird nicht an [Ursprung](/de/docs/Glossary/origin) ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: dessen [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für [gleichen Ursprung](/de/docs/Glossary/Same-origin_policy) gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine volle URL, wenn eine Same-Origin-Anfrage ausgeführt wird, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Steuert die Einschränkungen, die auf den Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder durch Leerzeichen getrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download)-Attribut sowie über die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob JavaScript den Download ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite das Einreichen von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt) zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} immer erlaubt ist, unabhängig von diesem Schlüsselwort. Es ermöglicht der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource die [Bildschirmdrehung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
    - `allow-popups`
      - : Erlaubt Popups (wie durch [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität ohne Fehlermeldung fehlschlagen.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed-Dokument, ein neues Browsing-Kontext zu öffnen, ohne dass die Sandbox-Flags auf es angewendet werden. Dies ermöglicht, zum Beispiel, dass eine Drittanbieter-Werbung sicher in einem Sandbox platziert wird, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verlinkt. Wenn dieser Flag nicht enthalten ist, wird eine weitergeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Einschränkungen unterworfen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungen, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer die [Same-Origin-Policy](/de/docs/Glossary/Same-origin_policy) nicht erfüllt (möglicherweise wird dadurch der Zugriff auf [Datenablage/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber nicht Pop-Up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt einem Dokument, das im `<iframe>` geladen wird, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf nicht partitionierte Cookies zu beantragen.
    - `allow-top-navigation`
      - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren, aber nur, wenn es durch eine Benutzeraktion initiiert wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigationen zu nicht-`http`-Protokollen, die in den Browser eingebaut sind oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument denselben Ursprung wie die einbettende Seite hat, wird es **stark entmutigt**, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dadurch das eingebettete Dokument das `sandbox`-Attribut entfernen kann — was es nicht sicherer macht als, das `sandbox`-Attribut gar nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed-`iframe`-Rahmens anzeigen kann — zum Beispiel, wenn der Betrachter den Frame in einem neuen Tab öffnet. Solcher Inhalt sollte auch von einem _separaten Ursprung_ bereitgestellt werden, um potenziellen Schaden zu begrenzen.

    > [!NOTE]
    > Wenn ein Benutzer umgeleitet wird, ein Popup-Fenster öffnet oder einen neuen Tab von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox`-Attribut öffnet, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine Seite innerhalb eines `<iframe>`s ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"`-Attribut ein neues Site in einem separaten Tab öffnet, wird das Absenden von Formularen in diesem neuen Browsing-Kontext ohne Meldung fehlschlagen.

- `src`

  - : Die URL der Seite, die eingebettet werden soll. Verwenden Sie `about:blank`, um eine leere Seite einzubetten, die den [same-origin policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen eines `<iframe>`-src-Attributs (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame in Firefox (ab Version 65), auf Chromium-basierten Browsern und Safari/iOS geladen wird.

    > [!NOTE]
    > Die `about:blank`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, um relative URLs aufzulösen, wie Anker-Links.

- `srcdoc`

  - : Inline-HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>`-Tags usw. enthält, obwohl die meisten davon weggelassen werden können und nur der Körperinhalt verbleibt. Dieses Dokument wird als `about:srcdoc` in seinem Standort haben. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, wird er auf die URL im `src`-Attribut zurückgreifen.

    > [!NOTE]
    > Die `about:srcdoc`-Seite verwendet die URL des einbettenden Dokuments als Basis-URL, um relative URLs aufzulösen, z.B. Ankerverknüpfungen.

- `width`
  - : Die Breite des Frames in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und könnten von allen User Agents nicht mehr unterstützt werden. Sie sollten sie in neuen Inhalten nicht verwenden und versuchen, sie aus vorhandenen Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements in Bezug auf den umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (Standard) zeichnet einen Rahmen um diesen Frame. Der Wert `0` entfernt den Rahmen um diesen Frame, aber stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Frame-Inhalts. Aufgrund weit verbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Der Abstand in Pixeln zwischen dem Inhalt des Frames und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser einen Scrollbalken für den Frame bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Frames größer als seine Abmessungen ist.
    - `yes`
      - : Immer einen Scrollbalken anzeigen.
    - `no`
      - : Nie einen Scrollbalken anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im [`window.frames`](/de/docs/Web/API/Window/frames)-Pseudo-Array enthalten.

Mit dem DOM-Objekt [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) können Skripte auf das [`window`](/de/docs/Web/API/Window)-Objekt der geframten Ressource über die Eigenschaft [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zugreifen. Die Eigenschaft [`contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) bezieht sich auf das Dokument im `<iframe>`, wie `contentWindow.document`.

Von innen eines Frames aus kann ein Skript einen Verweis auf dessen übergeordnetes Fenster mit [`window.parent`](/de/docs/Web/API/Window/parent) erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Skripte können nicht auf die meisten Eigenschaften in anderen `window`-Objekten zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Cross-Origin-Kommunikation kann mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) erreicht werden.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<iframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Wirkung auf `<iframe>`-Elemente.

## `error` und `load` Ereignisverhalten

Die `error`- und `load`-Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu erfassen. Aus Sicherheitsgründen lösen Benutzeragenten daher nicht das [error](/de/docs/Web/API/HTMLElement/error_event)-Ereignis auf `<iframe>`s aus, und das [load](/de/docs/Web/API/HTMLElement/load_event)-Ereignis wird immer ausgelöst, selbst wenn das `<iframe>`-Inhalt fehlschlägt zu laden.

## Barrierefreiheit

Personen, die mit Hilfstechnologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<iframe>` verwenden, um seinen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextswechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches \<iframe>

Dieses Beispiel bettet die Seite unter <https://example.org> in ein iframe ein. Dies ist ein häufiger Anwendungsfall von iframes: um Inhalte von einer anderen Website einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [probieren Sie es](#try_it)-Beispiel oben beides `<iframe>`-Einbettungen von Inhalten von einer anderen MDN-Site.

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

{{ EmbedLiveSample('A_simple_iframe', 640,400)}}

### Einbettung von Quellcode in ein \<iframe>

Dieses Beispiel rendert Quellcode direkt in einem iframe. Dies kann als Technik zur Verhinderung von Skriptinjektionen bei der Anzeige von benutzergeneriertem Inhalt verwendet werden, wenn es mit dem Attribut `sandbox` kombiniert wird.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie explizit `about:srcdoc` als Basis-URL angeben.

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

So schreiben Sie Escape-Sequenzen beim Verwenden von `srcdoc`:

- Zuerst schreiben Sie das HTML heraus und escapen alles, was Sie in einem normalen HTML-Dokument escapen würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren genau dasselbe Zeichen im `srcdoc`-Attribut. Um es daher zu einer echten Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle kaufmännischen Und-Zeichen (`&`) durch `&amp;`. Zum Beispiel wird `&lt;` zu `&amp;lt;`, und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc`-Attribut vorzeitig beendet wird (wenn Sie `'` anstelle von `"`, dann sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass das in diesem Schritt erzeugte `&quot;` nicht zu `&amp;quot;` wird.

#### Ergebnis

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
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
