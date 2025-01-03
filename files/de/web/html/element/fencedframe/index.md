---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: 8964db8251cf2825fa81270309a45a475184aab1
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen geschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind den {{htmlelement("iframe")}}-Elementen in Form und Funktion sehr ähnlich, mit folgenden Ausnahmen:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite ist eingeschränkt.
- Ein `<fencedframe>` kann auf siteübergreifende Daten zugreifen, jedoch nur unter einer sehr spezifischen Reihe von kontrollierten Umständen, die die Privatsphäre der Benutzer wahren.
- Ein `<fencedframe>` kann nicht manipuliert werden oder seine Daten über reguläres Scripting zugänglich machen (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des eingebetteten Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit eingebauten erweiterten Datenschutzfunktionen. Es behebt Schwächen von `<iframe>`s wie der Abhängigkeit von Drittanbieter-Cookies und anderen Datenschutzrisiken. Weitere Details finden Sie unter [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Rechtepolitik](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Details darüber, welche Funktionen über eine auf einem Fenced Frame gesetzte Politik kontrolliert werden können, finden Sie unter [Rechtepolitiken, die für Fenced Frames verfügbar sind](#rechtepolitiken,_die_für_fenced_frames_verfügbar_sind).

- `height` {{experimental_inline}}

  - : Eine ganze Zahl ohne Einheit, die die Höhe des Fenced Frame in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganze Zahl ohne Einheit, die die Breite des Fenced Frame in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Rechtepolitiken, die für Fenced Frames verfügbar sind

Die von einem Kontext auf oberster Ebene an ein Fenced Frame delegierten Berechtigungen zum Zulassen oder Verweigern von Funktionen könnten als Kommunikationskanal genutzt werden und stellen somit eine Bedrohung für die Privatsphäre dar. Daher sind Standard-Web-Funktionen, die über eine [Rechtepolitik](/de/docs/Web/HTTP/Headers/Permissions-Policy) in ihrer Verfügbarkeit kontrolliert werden können (zum Beispiel [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), innerhalb von Fenced Frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Politik innerhalb von Fenced Frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von Fenced Frames entwickelt wurden:

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

Derzeit sind diese Funktionen immer innerhalb von Fenced Frames aktiviert. In der Zukunft wird es möglich sein, welche aktiviert sind, mithilfe des `allow`-Attributs des `<fencedframe>` zu kontrollieren. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise wird auch das Laden des Fenced Frame blockieren — es wird keinen Kommunikationskanal geben.

## Fokussieren über Fenced Frame-Grenzen hinweg

Die Fähigkeit des aktiven Fokus eines Dokuments, über Fenced Frame-Grenzen hinweg zu wechseln (d.h. von einem Element außerhalb des Fenced Frame zu einem innerhalb oder umgekehrt), ist eingeschränkt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da es dort kein Risiko des Fingerprintings gibt.

Versuche, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überwinden, sind jedoch verboten — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um erschlossene Informationen über die Grenze zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft zu justieren.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keinen Einfluss auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen ändert das Ändern der `width` oder `height` des `<fencedframe>` die Größe des auf der Seite eingebetteten Containers, aber das Dokument innerhalb des Containers wird optisch skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Menschen, die mit assistiver Technologie navigieren, wie einem Bildschirmlesegerät, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um dessen eingebetteten Inhalt zu bestimmen. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, welches anschließend verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss dem `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} in eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
