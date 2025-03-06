---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`-Elemente sind in Form und Funktion den {{htmlelement("iframe")}}-Elementen sehr ähnlich, mit folgenden Ausnahmen:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite ist eingeschränkt.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, jedoch nur unter sehr spezifischen, kontrollierten Umständen, die die Privatsphäre des Nutzers wahren.
- Ein `<fencedframe>` kann nicht durch reguläre Skripte manipuliert oder auf seine Daten zugegriffen werden (z. B. Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, ebenso wenig kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit mehr nativen Datenschutzfunktionen. Es adressiert die Schwächen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie im [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Zugangssicherheitsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie gesteuert werden können, finden Sie unter [Zugangssicherheitsrichtlinien, die auf fenced frames verfügbar sind](#zugangssicherheitsrichtlinien,_die_auf_fenced_frames_verfügbar_sind).

- `height` {{experimental_inline}}

  - : Eine ganzzahlige Einheit, die die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganzzahlige Einheit, die die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Zugangssicherheitsrichtlinien, die auf fenced frames verfügbar sind

Berechtigungen, die vom obersten Kontext an ein fenced frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden, was ein Datenschutzrisiko darstellt. Daher sind Standard-Webfunktionen, deren Verfügbarkeit über [Zugangssicherheitsrichtlinien](/de/docs/Web/HTTP/Headers/Permissions-Policy) gesteuert werden kann (zum Beispiel, [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von fenced frames.

Die einzigen Funktionen, die von einer Richtlinie innerhalb von fenced frames aktiviert werden können, sind die spezifischen Funktionen, die zur Verwendung innerhalb von fenced frames gedacht sind:

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

Derzeit sind diese Funktionen immer innerhalb von fenced frames aktiviert. In der Zukunft wird es möglich sein, welche Funktionen aktiviert sind, über das `allow`-Attribut des `<fencedframe>` zu steuern. Das Blockieren von Privacy Sandbox-Funktionen auf diese Weise verhindert auch das Laden des fenced frames — es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über fenced frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus eines Dokuments über fenced frame-Grenzen hinweg zu verschieben (d. h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt), ist begrenzt. Benutzerinitiierte Aktionen, wie etwa ein Klick oder ein Tab, können dies tun, da dort kein Risiko des Fingerprintings besteht.

Allerdings ist es untersagt, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu durchbrechen — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keinen Einfluss auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen verändert sich beim Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell angepasst, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<fencedframe>`-Elementen und/oder falls Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Werbung in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
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
