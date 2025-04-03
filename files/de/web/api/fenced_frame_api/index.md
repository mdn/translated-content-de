---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine wesentliche Quelle für [Datenschutz](/de/docs/Web/Privacy)- und [Sicherheitsprobleme](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die zur Weitergabe von Informationen und zur Verfolgung von Nutzern über Websites hinweg verwendet werden können. Darüber hinaus können Inhalte, die in ein `<iframe>` eingebettet sind, mit dem einbettenden Dokument kommunizieren (zum Beispiel unter Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Formen von Informationen aus dem `<iframe>` zu lesen — zum Beispiel können erhebliche Tracking-/Fingerprinting-Daten durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft abgerufen werden, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontexts zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen, um Speicherbereiche zu partitionieren, sodass Cookie-Daten nicht mehr für das Tracking verwendet werden können (zum Beispiel siehe [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [FireFox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind in Form und Funktion sehr ähnlich zu `<iframe>`s, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Website geteilt werden kann.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, jedoch nur in einem sehr spezifischen Satz kontrollierter Umstände, die den Datenschutz der Nutzer wahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripte zugegriffen werden (zum Beispiel das Lesen oder Festlegen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von Fenced Frames lesen Sie den Leitfaden [Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln und unterschiedliche Anwendungsfälle auf eine den Datenschutz wahrende Weise zu erfüllen. Die meisten dieser Anwendungsfälle waren zuvor auf Drittanbieter-Cookies oder andere Mechanismen angewiesen, die dem Datenschutz abträglich waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte Cross-Site-Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Anzeigen Nutzer auf anderen Websites bereits gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie einem Nutzer Varianten basierend auf einer Gruppe zeigen, der er zugeordnet ist, oder basierend darauf, wie viele Nutzer jede Variante bereits gesehen haben.
  - Unternehmen können die Nutzererfahrung basierend darauf anpassen, was diese auf anderen Websites gesehen haben. Wenn sie beispielsweise bereits eine Mitgliedschaft erworben haben, möchte man ihnen vielleicht keine Mitgliedschafts-Anzeigen mehr auf Ihren anderen Portalen zeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) ermöglicht es Entwicklern, interessengruppenbasierte Werbung wie Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle zu implementieren. Sie kann mehrere Gebote für einen Anzeigenplatz bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (die aus gemeinsam genutztem Speicher oder der Protected Audience API stammen) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie die in einem {{htmlelement("fencedframe")}} eingebetteten Inhalte nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>`s festgelegt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine undurchsichtige [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), das nur in einem `<iframe>` verwendet werden kann.

In jedem Fall speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält — entweder zu der undurchsichtigen URN oder zur internen `url`-Eigenschaft von `FencedFrameConfig` gemappt. Der URL-Wert kann von JavaScript, das im einbettenden Kontext läuft, nicht gelesen werden.

> [!NOTE]
> Unterstützung für undurchsichtige URNs in `<iframe>`s wird bereitgestellt, um die Migration vorhandener Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung ist als Übergangslösung gedacht und wird in Zukunft entfernt, sobald die Akzeptanz wächst.

> **Hinweis:** `FencedFrameConfig` hat eine Methode [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext), die verwendet wird, um Daten aus dem einbettenden Dokument in den gemeinsam genutzten Speicher des `<fencedframe>` zu übermitteln. Sie könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` zugegriffen und verwendet werden, um einen Bericht zu erstellen. Weitere Details finden Sie in der [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

### Zugriff auf die Funktionalität des Fenced Frames über das `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, das Übermitteln von Berichtsdatensätzen über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenaufrufe und -klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s konzipiert sind, können über Berechtigungspolitiken aktiviert werden, die auf ihnen festgelegt sind; andere politisch kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>`s gestellt werden, einschließlich untergeordneten `<iframe>`s, die innerhalb eines `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Response-Header mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder `<iframe>` eingebettet wird, das innerhalb eines `<fencedframe>` geladen wird.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind in Fenced Frames nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die verwendet werden könnte, um Daten zu leaken.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte durchgesetzt, die von innerhalb von Fenced Frames geöffnet werden, da sie sonst verwendet werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes von innerhalb eines Fenced Frames geöffnete neue Fenster wird [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt haben, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte anzugeben, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von Fenced Frames geerbt werden, um Datenschutzprobleme zu mildern. Damit ein Fenced Frame geladen werden kann, müssen Sie keine `sandbox`-CSP angeben (was die untenstehenden Werte impliziert), oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload`- und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden bei Fenced Frames nicht ausgelöst, weil sie Informationen in Form eines Seitendeletionstempels leaken könnten. Die Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu beseitigen.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, also welche Inhalte in ihm angezeigt werden. Eine `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft festgelegt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Fenced Frame-Funktionalität relevant sind. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen für andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der abgebildeten URL, die einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.

## Registrierung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) (Protected Audience API) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) (Shared Storage API), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) erstellen, erfordern, dass Sie Ihre Website in einem [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) registrieren. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code weiterhin lokal testen, ohne sich zu registrieren. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos nutzen alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (beinhaltet auch einige Private Aggregation API-Beispiele)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
