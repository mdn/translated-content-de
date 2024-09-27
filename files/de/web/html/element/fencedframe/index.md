---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten [Browsing-Kontext](/de/docs/Glossary/browsing_context) und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`-Elemente sind in Form und Funktion sehr ähnlich zu {{htmlelement("iframe")}}-Elementen, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Website eingeschränkt ist.
- Ein `<fencedframe>` auf Daten von anderen Sites zugreifen kann, jedoch nur unter sehr spezifischen kontrollierten Umständen, die die Privatsphäre der Nutzer bewahren.
- Ein `<fencedframes>` kann nicht über reguläre Skripte manipuliert werden oder auf seine Daten zugegriffen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` hat keinen Zugriff auf das DOM des einbettenden Kontexts und umgekehrt.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit mehr eingebauten Datenschutzfunktionen. Es adressiert Schwächen von `<iframe>` wie die Abhängigkeit von Drittanbieter-Cookies und anderen Datenschutzerisiken. Weitere Details finden Sie in der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf der Herkunft der Anfrage zur Verfügung stehen. Siehe [Verfügbare Berechtigungsrichtlinien für fenced frames](#verfügbare_berechtigungsrichtlinien_für_fenced_frames) für weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie gesteuert werden können.

- `height` {{experimental_inline}}

  - : Eine ganze Zahl ohne Einheit, die die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganze Zahl ohne Einheit, die die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Verfügbare Berechtigungsrichtlinien für fenced frames

Berechtigungen, die vom obersten Kontext an einen fenced frame delegiert werden, um Funktionen zuzulassen oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen somit eine Bedrohung für die Privatsphäre dar. Daher sind standardmäßige Webfunktionen, deren Verfügbarkeit über [Permissions Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) gesteuert werden kann (zum Beispiel, [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von fenced frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind die spezifischen Funktionen, die innerhalb von fenced frames verwendet werden sollen:

- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Derzeit sind diese Funktionen immer in fenced frames aktiviert. In Zukunft wird mittels des `<fencedframe>`-Attributes `allow` gesteuert werden können, welche aktiv sind. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise blockiert auch das Laden des fenced frames — es wird überhaupt keinen Kommunikationskanal geben.

## Fokussieren über fenced frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus des Dokuments über fenced frame-Grenzen hinweg zu bewegen (d. h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt), ist begrenzt. Nutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da hier kein Risiko durch Fingerprinting besteht.

Versuche jedoch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überqueren, sind verboten — ein bösartiges Skript könnte eine Serie solcher Aufrufe nutzen, um erschlossene Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>` die Anpassung der Position des eingebetteten Dokuments innerhalb seines Rahmens mittels der {{cssxref("object-position")}}-Eigenschaft.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` gesetzt werden. In solchen Fällen verändert das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützenden Technologien wie einem Screenreader navigieren, können das [`title` attribute](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Titelwert sollte den eingebetteten Inhalt kurz und prägnant beschreiben:

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu ermitteln, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer geschützten Audience-API-Auktion, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

> **Hinweis:** `resolveToConfig: true` muss beim `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierung von Inhalten</a
        >, eingebettete Inhalte, interaktive Inhalte, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tagweglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
