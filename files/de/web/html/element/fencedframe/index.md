---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, das eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind sehr ähnlich zu {{htmlelement("iframe")}}-Elementen in Form und Funktion, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der eingebetteten Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf standortübergreifende Daten zugreifen, jedoch nur unter sehr spezifischen, benutzerfreundliche Datenschutzerhaltenden Umständen.
- Ein `<fencedframe>` kann nicht über reguläres Scripting manipuliert oder dessen Daten abgerufen werden (zum Beispiel lesen oder setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM-Kontext des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit mehr integrierten Datenschutzfunktionen. Es adressiert Defizite von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Legt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` fest, die definiert, welche Features für das `<fencedframe>` basierend auf dem Ursprung der Anfrage verfügbar sind. Siehe [Permissions policies available to fenced frames](#permissions-policies_verfügbar_für_fenced_frames) für weitere Details zu welchen Features über eine Richtlinie, die auf einem gefangenen Frame gesetzt ist, gesteuert werden können.

- `height` {{experimental_inline}}

  - : Eine ganze Zahl ohne Einheit, die die Höhe des gefangenen Frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganze Zahl ohne Einheit, die die Breite des gefangenen Frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Permissions-Policies verfügbar für Fenced Frames

Berechtigungen, die vom Top-Level-Kontext an einen gefangenen Frame delegiert werden, um Features zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher ein Datenschutzrisiko dar. Deshalb sind standardmäßige Webfeatures, deren Verfügbarkeit über [Permissions Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) kontrolliert werden kann (zum Beispiel [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von fenced frames.

Die einzigen Features, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind die spezifischen Features, die dazu gedacht sind, innerhalb von fenced frames verwendet zu werden:

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

Derzeit sind diese immer innerhalb von fenced frames aktiviert. In Zukunft wird kontrollierbar sein, welche durch das `<fencedframe>` `allow`-Attribut aktiviert werden. Das Blockieren von Datenschutz-Sandbox-Features auf diese Weise wird auch das Laden des fenced frame blockieren — es wird keinen Kommunikationskanal geben.

## Fokussieren über Fenced-Frame-Grenzen hinweg

Die Fähigkeit des aktiven Fokus des Dokuments über Fenced-Frame-Grenzen hinweg verschoben zu werden (d. h. von einem Element außerhalb des fenced frame zu einem darin oder umgekehrt) ist eingeschränkt. Vom Benutzer initiierte Aktionen wie ein Klick oder Tab können dies tun, da dort kein Fingerabdrucksrisiko besteht.

Der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überqueren, ist jedoch untersagt — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>` die Position des eingebetteten Dokuments innerhalb seines Rahmens unter Verwendung der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keinen Effekt auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` gesetzt werden. In solchen Fällen wird durch Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitraubend sein, besonders für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Ad-Auktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss beim `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Wortlautinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
