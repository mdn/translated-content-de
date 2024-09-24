---
title: "<iframe>: Das Inline-Frame-Element"
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTMLSidebar}}

Das **`<iframe>`** [HTML](/de/docs/Web/HTML) Element stellt einen verschachtelten {{Glossary("browsing context")}} dar und bettet eine andere HTML-Seite in die aktuelle ein.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Jeder eingebettete Browsing-Kontext hat sein eigenes [Dokument](/de/docs/Web/API/Document) und ermöglicht URL-Navigationen. Die Navigationen jedes eingebetteten Browsing-Kontexts werden in die [Sitzungshistorie](/de/docs/Web/API/History) des _obersten_ Browsing-Kontexts linearisiert. Der Browsing-Kontext, der die anderen einbettet, wird als _Eltern-Browsing-Kontext_ bezeichnet. Der _oberste_ Browsing-Kontext — derjenige ohne Eltern — ist in der Regel das Browserfenster, dargestellt durch das {{domxref("Window")}} Objekt.

> [!WARNING]
> Da jeder Browsing-Kontext eine vollständige Dokumentenumgebung ist, benötigt jedes `<iframe>` in einer Seite mehr Speicher und andere Computerressourcen. Theoretisch können Sie so viele `<iframe>` verwenden, wie Sie möchten, aber überprüfen Sie auf Performance-Probleme.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow`

  - : Legt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) für das `<iframe>` fest. Die Richtlinie definiert, welche Funktionen dem `<iframe>` zur Verfügung stehen (z. B. Zugriff auf das Mikrofon, die Kamera, den Akku, das Web-Teilen usw.) basierend auf dem Ursprung der Anforderung.

    Siehe [iframes](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) im Thema `Permissions-Policy` für Beispiele.

    > [!NOTE]
    > Eine durch das `allow`-Attribut spezifizierte Berechtigungsrichtlinie stellt eine weitere Einschränkung zusätzlich zur im {{httpheader("Permissions-Policy")}} Header spezifizierten Richtlinie dar. Sie ersetzt diese nicht.

- `allowfullscreen`

  - : Setzen Sie dies auf `true`, wenn das `<iframe>` den Vollbildmodus aktivieren kann, indem die Methode {{domxref("Element.requestFullscreen", "requestFullscreen()")}} aufgerufen wird.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut betrachtet und als `allow="fullscreen"` neu definiert.

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : Setzen Sie dies auf `true`, wenn ein Cross-Origin-`<iframe>` die [Payment Request API](/de/docs/Web/API/Payment_Request_API) aufrufen darf.

    > [!NOTE]
    > Dieses Attribut wird als ein veraltetes Attribut betrachtet und als `allow="payment"` neu definiert.

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : Ein boolesches Attribut, das, falls vorhanden, angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des `<iframe>` gesendet werden sollen. Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

- `credentialless` {{Experimental_Inline}}

  - : Setzen Sie dies auf `true`, um das `<iframe>` ohne Berechtigungen zu machen, was bedeutet, dass sein Inhalt in einem neuen, flüchtigen Kontext geladen wird. Es hat keinen Zugriff auf das Netzwerk, Cookies und Speicherdateien, die mit seinem Ursprung verbunden sind. Es verwendet einen neuen Kontext, der auf die Lebensdauer des übergeordneten Dokuments beschränkt ist. Im Gegenzug können die {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) Einbettungsregeln aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für mehr Details.

- `csp` {{experimental_inline}}

  - : Eine [Content Security Policy](/de/docs/Web/HTTP/CSP), die für die eingebettete Ressource durchgesetzt wird. Siehe {{domxref("HTMLIFrameElement.csp")}} für Details.

- `height`
  - : Die Höhe des Rahmens in CSS-Pixeln. Standard ist `150`.
- `loading`

  - : Gibt an, wann der Browser das Iframe laden soll:

    - `eager`
      - : Laden Sie das Iframe sofort beim Laden der Seite (dies ist der Standardwert).
    - `lazy`

      - : Verzögern Sie das Laden des Iframes, bis es eine berechnete Entfernung vom {{glossary("visual viewport")}} erreicht, wie vom Browser definiert.
        Der Zweck besteht darin, das erforderliche Netzwerk- und Speicherbandbreiten für das Abrufen des Rahmens zu vermeiden, bis der Browser relativ sicher ist, dass er benötigt wird.
        Dies verbessert die Leistung und die Kosten in den meisten typischen Anwendungsfällen, insbesondere durch die Verkürzung der anfänglichen Ladezeiten der Seite.

        > [!NOTE]
        > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
        > Dies ist eine Maßnahme gegen Tracking.

- `name`
  - : Ein zielbarer Name für den eingebetteten Browsing-Kontext. Dies kann im `target`-Attribut der {{HTMLElement("a")}}, {{HTMLElement("form")}}, oder {{HTMLElement("base")}} Elemente verwendet werden; im `formtarget`-Attribut der {{HTMLElement("input")}} oder {{HTMLElement("button")}} Elemente; oder im `windowName`-Parameter in der {{domxref("Window.open()","window.open()")}} Methode.
- `referrerpolicy`

  - : Gibt an, welchen [Referrer](/de/docs/Web/API/Document/referrer) beim Abrufen der Frame-Ressource gesendet werden soll:

    - `no-referrer`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`
      - : Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin")}}s ohne {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) gesendet.
    - `origin`
      - : Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, und {{Glossary("port")}}.
    - `origin-when-cross-origin`
      - : Der an andere Ursprünge gesendete Referrer wird auf das Scheme, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`
      - : Ein Referrer wird für {{Glossary("Same-origin policy", "den gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`
      - : Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitslevel des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard)
      - : Sendet eine vollständige URL bei einer gleichartigen Anforderung, sendet nur den Ursprung, wenn das Sicherheitslevel des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`
      - : Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password), oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sandbox`

  - : Kontrolliert die Beschränkungen, die auf den Inhalt im `<iframe>` angewendet werden. Der Wert des Attributs kann entweder leer sein, um alle Einschränkungen anzuwenden, oder um platzgetrennte Tokens, um bestimmte Einschränkungen aufzuheben:

    - `allow-downloads`
      - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut, sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code es ohne Benutzerinteraktion initiiert hat.
    - `allow-forms`
      - : Erlaubt der Seite, Formulare zu senden. Wenn dieses Schlüsselwort nicht verwendet wird, wird ein Formular wie gewohnt angezeigt, aber das Senden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
    - `allow-modals`
      - : Erlaubt der Seite, modale Fenster zu öffnen durch {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} und {{domxref("Window.prompt()")}}, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, {{domxref("BeforeUnloadEvent")}}-Ereignisse zu empfangen.
    - `allow-orientation-lock`
      - : Lässt die Ressource [die Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`
      - : Ermöglicht der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`
      - : Erlaubt Popups (wie von {{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}}). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
    - `allow-popups-to-escape-sandbox`
      - : Erlaubt einem sandboxed Dokument, einen neuen Browsing-Kontext zu öffnen, ohne die Sandboxing-Flags darauf zu erzwingen. Dadurch kann beispielsweise eine Anzeige eines Drittanbieters sicher sandboxed werden, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verlinkt. Wenn dieses Flag nicht enthalten ist, unterliegt eine umgeleitete Seite, ein Popup-Fenster oder ein neuer Tab denselben Sandbox-Beschränkungen wie das ursprüngliche `<iframe>`.
    - `allow-presentation`
      - : Erlaubt Einbettungen zu entscheiden, ob ein IFrame eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
    - `allow-same-origin`
      - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung behandelt, der immer die {{Glossary("same-origin policy")}} auslöst (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
    - `allow-scripts`
      - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erzeugen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : Erlaubt ein in das `<iframe>` geladenes Dokument die Verwendung der {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} zur Anforderung des Zugriffs auf unpartitionierte Cookies.
    - `allow-top-navigation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren (denjenigen, der `_top` genannt wird).
    - `allow-top-navigation-by-user-activation`
      - : Lässt die Ressource den obersten Browsing-Kontext navigieren, jedoch nur, wenn dies durch eine Benutzeraktion veranlasst wird.
    - `allow-top-navigation-to-custom-protocols`
      - : Erlaubt Navigierungen zu nicht-`http` Protokollen, die in den Browser integriert sind oder [von einer Website registriert werden](/de/docs/Web/API/Navigator/registerProtocolHandler). Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

    > [!NOTE]
    >
    > - Wenn das eingebettete Dokument den gleichen Ursprung hat wie die einbettende Seite, wird dringend davon abgeraten, sowohl `allow-scripts` als auch `allow-same-origin` zu verwenden, da dies dem eingebetteten Dokument ermöglicht, das `sandbox` Attribut zu entfernen — was es nicht sicherer macht, als das `sandbox` Attribut gar nicht zu verwenden.
    > - Sandboxing ist nutzlos, wenn der Angreifer Inhalte außerhalb eines sandboxed `iframe` anzeigen kann — zum Beispiel, wenn der Betrachter den Rahmen in einem neuen Tab öffnet. Solche Inhalte sollten auch von einem _separaten Ursprung_ geliefert werden, um möglichen Schaden zu begrenzen.

    > [!NOTE]
    > Beim Weiterleiten des Benutzers, dem Öffnen eines Popup-Fensters oder dem Öffnen eines neuen Tabs von einer eingebetteten Seite innerhalb eines `<iframe>` mit dem `sandbox` Attribut, unterliegt der neue Browsing-Kontext denselben `sandbox`-Einschränkungen. Dies kann Probleme verursachen — zum Beispiel, wenn eine in einem `<iframe>` eingebettete Seite ohne ein `sandbox="allow-forms"` oder `sandbox="allow-popups-to-escape-sandbox"` Attribut gesetzt ist, eine neue Seite in einem separaten Tab öffnet, wird das Formular in diesem neuen Browsing-Kontext ohne Hinweise fehlschlagen.

- `src`

  - : Die URL der einzubettenden Seite. Verwenden Sie den Wert `about:blank`, um eine leere Seite einzubetten, die der [same-origin policy](/de/docs/Web/Security/Same-origin_policy#inherited_origins) entspricht. Beachten Sie auch, dass das programmatische Entfernen eines `<iframe>` `src`-Attributs (z. B. über {{domxref("Element.removeAttribute()")}}) in Firefox (ab Version 65), auf Chromium-basierte Browser und Safari/iOS die `about:blank`-Seite im Frame lädt.

    > [!NOTE]
    > Die `about:blank` Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen relativer URLs, wie z. B. Anker-Links.

- `srcdoc`

  - : Inline HTML zum Einbetten, das das `src`-Attribut überschreibt. Sein Inhalt sollte der Syntax eines vollständigen HTML-Dokuments folgen, das die Doctype-Direktive, `<html>`, `<body>` Tags usw. enthält, obwohl die meisten von ihnen weggelassen werden können, wenn nur der Body-Inhalt vorhanden ist. Dieses Dokument hat `about:srcdoc` als Standort. Wenn ein Browser das `srcdoc`-Attribut nicht unterstützt, erfolgt ein Fallback zur URL im `src`-Attribut.

    > [!NOTE]
    > Die `about:srcdoc` Seite verwendet die URL des einbettenden Dokuments als Basis-URL beim Auflösen relativer URLs, wie z. B. Anker-Links.

- `width`
  - : Die Breite des Rahmens in CSS-Pixeln. Standard ist `300`.

### Veraltete Attribute

Diese Attribute sind veraltet und werden möglicherweise nicht mehr von allen Benutzeragenten unterstützt. Sie sollten sie nicht in neuen Inhalten verwenden und versuchen, sie aus bestehenden Inhalten zu entfernen.

- `align` {{deprecated_inline}}
  - : Die Ausrichtung dieses Elements im Verhältnis zum umgebenden Kontext.
- `frameborder` {{deprecated_inline}}
  - : Der Wert `1` (der Standard) zeichnet einen Rahmen um diesen Rahmen. Der Wert `0` entfernt den Rahmen um diesen Rahmen, aber Sie sollten stattdessen die CSS-Eigenschaft {{cssxref("border")}} verwenden, um `<iframe>`-Rahmen zu steuern.
- `longdesc` {{deprecated_inline}}
  - : Eine URL einer langen Beschreibung des Inhalts des Rahmens. Aufgrund weitverbreiteten Missbrauchs ist dies für nicht-visuelle Browser nicht hilfreich.
- `marginheight` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Rahmens und seinen oberen und unteren Rändern.
- `marginwidth` {{deprecated_inline}}
  - : Die Menge an Platz in Pixeln zwischen dem Inhalt des Rahmens und seinen linken und rechten Rändern.
- `scrolling` {{deprecated_inline}}

  - : Gibt an, wann der Browser einen Scrollbalken für den Rahmen bereitstellen soll:

    - `auto`
      - : Nur wenn der Inhalt des Rahmens größer als seine Abmessungen ist.
    - `yes`
      - : Immer einen Scrollbalken anzeigen.
    - `no`
      - : Niemals einen Scrollbalken anzeigen.

## Scripting

Inline-Frames, wie {{HTMLElement("frame")}}-Elemente, sind im {{domxref("window.frames")}} Pseudo-Array enthalten.

Mit dem DOM {{domxref("HTMLIFrameElement")}}-Objekt können Skripte auf das {{domxref("window")}} Objekt der gerahmten Ressource über die {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} Eigenschaft zugreifen. Die {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} Eigenschaft bezieht sich auf das `document` im `<iframe>`, genauso wie `contentWindow.document`.

Aus dem Inneren eines Rahmens kann ein Skript eine Referenz auf sein übergeordnetes Fenster mit {{domxref("window.parent")}} erhalten.

Der Skriptzugriff auf den Inhalt eines Frames unterliegt der [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Skripte können auf die meisten Eigenschaften in anderen `window` Objekten nicht zugreifen, wenn das Skript von einem anderen Ursprung geladen wurde, einschließlich Skripten innerhalb eines Frames, die auf das übergeordnete Frame zugreifen. Die Kommunikation zwischen Ursprüngen kann mit {{domxref("Window.postMessage()")}} erreicht werden.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<iframe>` die Anpassung der Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}} Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keinen Effekt auf `<iframe>` Elemente.

## Verhalten von `error` und `load` Ereignissen

Die `error` und `load` Ereignisse, die auf `<iframe>`s ausgelöst werden, könnten verwendet werden, um den URL-Raum der HTTP-Server des lokalen Netzwerks zu durchdringen. Daher stellen Benutzeragenten aus Sicherheitsgründen sicher, dass das [error](/de/docs/Web/API/HTMLElement/error_event) Ereignis nicht auf `<iframe>`s ausgelöst wird und das [load](/de/docs/Web/API/HTMLElement/load_event) Ereignis immer ausgelöst wird, selbst wenn der Inhalt des `<iframe>`s nicht geladen wird.

## Barrierefreiheit

Personen, die mit unterstützenden Technologien wie einem Bildschirmleser navigieren, können das [`title` Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<iframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<iframe
  title="Wikipedia-Seite über Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn eingebettete Inhalte interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

### Ein einfaches `<iframe>`

Dieses Beispiel bettet die Seite unter <https://example.org> in einem Iframe ein. Dies ist ein häufiges Anwendungsbeispiel für iframes: um Inhalte von einer anderen Seite einzubetten. Zum Beispiel sind das Live-Beispiel selbst und das [Probieren Sie es aus](#try_it) Beispiel oben beide `<iframe>` Einbettungen von Inhalten von einer anderen MDN-Site.

#### HTML

```html
<iframe
  src="https://example.org"
  title="Iframe Beispiel 1"
  width="400"
  height="300">
</iframe>
```

#### Ergebnisse

{{ EmbedLiveSample('A_simple_iframe', 640,400)}}

### Einbetten von Quellcode in ein `<iframe>`

Dieses Beispiel rendert Quellcode direkt in einem Iframe. Dies kann als Technik verwendet werden, um Skriptinjektion zu verhindern, wenn benutzergenerierte Inhalte angezeigt werden, in Kombination mit dem `sandbox` Attribut.

Beachten Sie, dass beim Verwenden von `srcdoc` alle relativen URLs im eingebetteten Inhalt relativ zur URL der einbettenden Seite aufgelöst werden. Wenn Sie Anker-Links verwenden möchten, die auf Stellen im eingebetteten Inhalt verweisen, müssen Sie `about:srcdoc` explizit als Basis-URL angeben.

#### HTML

```html-nolint
<article>
  <footer>Vor neun Minuten schrieb <i>jc</i>:</footer>
  <iframe
    sandbox
    srcdoc="<p>Es gibt zwei Möglichkeiten, das <code>iframe</code>-Element zu verwenden:</p>
<ol>
<li><a href=&quot;about:srcdoc#embed_another&quot;>Um Inhalte von einer anderen Seite einzubetten</a></li>
<li><a href=&quot;about:srcdoc#embed_user&quot;>Um benutzergenerierte Inhalte einzubetten</a></li>
</ol>
<h2 id=&quot;embed_another&quot;>Einbetten von Inhalten von einer anderen Seite</h2>
<p>Verwenden Sie das <code>src</code>-Attribut, um die URL der einzubettenden Seite zu spezifizieren:</p>
<pre><code>&amp;lt;iframe src=&quot;https://example.org&quot;&amp;gt;&amp;lt;/iframe&amp;gt;</code></pre>
<h2 id=&quot;embed_user&quot;>Einbetten von benutzergenerierten Inhalten</h2>
<p>Verwenden Sie das <code>srcdoc</code>-Attribut, um den einzubettenden Inhalt zu spezifizieren. Dieser Beitrag ist bereits ein Beispiel!</p>
"
    width="500"
    height="250"
></iframe>
</article>
```

So schreiben Sie Escape-Sequenzen bei Verwendung von `srcdoc`:

- Schreiben Sie zuerst das HTML aus und maskieren Sie alles, was Sie in einem normalen HTML-Dokument maskieren würden (wie `<`, `>`, `&` usw.).
- `&lt;` und `<` repräsentieren dasselbe Zeichen im `srcdoc` Attribut. Um es zu einer tatsächlichen Escape-Sequenz im HTML-Dokument zu machen, ersetzen Sie alle Ampersands (`&`) durch `&amp;`. Beispielsweise wird `&lt;` zu `&amp;lt;` und `&amp;` wird zu `&amp;amp;`.
- Ersetzen Sie alle Anführungszeichen (`"`) durch `&quot;`, um zu verhindern, dass das `srcdoc` Attribut vorzeitig beendet wird (wenn Sie `'` anstelle davon verwenden, sollten Sie `'` durch `&apos;` ersetzen). Dieser Schritt erfolgt nach dem vorherigen, sodass `&quot;`, das in diesem Schritt erzeugt wird, nicht zu `&amp;quot;` wird.

#### Ergebnisse

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
          >Flow Content</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing Content</a
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
      <th scope="row">DOM-Interface</th>
      <td>{{domxref("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: frame-ancestors](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
