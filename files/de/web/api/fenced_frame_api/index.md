---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheits-](/de/docs/Web/Security) Probleme im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch wurden `<iframe>`s genutzt, um Drittanbieter-Cookies zu setzen, die verwendet werden können, um Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Zudem kann in einem `<iframe>` eingebetteter Inhalt mit seinem einbettenden Dokument kommunizieren (zum Beispiel unter Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Informationen aus dem `<iframe>` zu lesen — zum Beispiel kann man erhebliche Tracking-/Fingerprinting-Daten erhalten, indem man die eingebettete URL aus der `src`-Eigenschaft liest, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontextes zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, sodass Cookie-Daten nicht mehr zum Verfolgen verwendet werden können (siehe zum Beispiel [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und der einbettenden Website geteilt werden kann.
- Ein `<fencedframe>` kann auf standortübergreifende Daten zugreifen, jedoch nur in einem sehr spezifischen Satz kontrollierter Umstände, die die Privatsphäre der Nutzer schützen.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripte abgerufen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalt kann nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontextes zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von standortübergreifenden Inhalten einzubetten oder Daten zu sammeln, wobei unterschiedliche Anwendungsfälle auf eine datenschutzfreundliche Weise erfüllt werden. Die meisten davon basierten zuvor auf Drittanbieter-Cookies oder anderen Mechanismen, die schlecht für die Privatsphäre waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte standortübergreifende Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Beispielsweise:
  - Werbetreibende können die Reichweite einer Anzeige messen oder Folgeanzeigen basierend darauf ausspielen, welche Anzeigen Benutzer auf anderen Seiten bereits gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie Varianten einem Benutzer basierend auf der Gruppe, der sie zugewiesen sind, oder basierend darauf, wie viele Benutzer jede bereits gesehen haben, zeigen.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was Benutzer auf anderen Seiten gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise keine Mitgliedschafts-Anzeigen auf Ihren anderen Seiten zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern die Implementierung von an Interessen orientierter Werbung, insbesondere Remarketing und benutzerdefinierte Zielgruppen-Anwendungsfälle. Sie kann mehrere Gebote für Werbeflächen auswerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (stammend aus dem gemeinsamen Speicher oder der Protected Audience API) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie die in einem {{htmlelement("fencedframe")}} eingebetteten Inhalte nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, erzeugt eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann per JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Auktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem opaken [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), der nur in einem `<iframe>` verwendet werden kann.

In beiden Fällen speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält — zugeordnet zum opaken URN oder zur internen `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript im einbettenden Kontext gelesen werden.

> [!NOTE]
> Unterstützung wird für opake URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen hin zu [privacy sandbox](https://privacysandbox.google.com/) APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird in Zukunft entfernt werden, wenn die Akzeptanz wächst.

> **Hinweis:** `FencedFrameConfig` hat eine Methode [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext), die verwendet wird, um Daten vom einbettenden Dokument in den gemeinsamen Speicher des `<fencedframe>` zu übermitteln. Diese könnten beispielsweise in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Erstellung eines Berichts verwendet werden. Weitere Einzelheiten finden Sie in der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage).

### Zugriff auf fenced frame Funktionalitäten über das `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der fenced frame API relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenaufrufe und -klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungspolitiken aktiviert werden, die auf sie gesetzt sind; andere von der Politik kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken für fenced frames verfügbar](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesendet, die von innerhalb eines `<fencedframe>` gemacht werden, einschließlich eingebetteter `<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit dem Wert `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder ein `<iframe>` eingebettet werden soll, das innerhalb eines `<fencedframe>`s geladen wird.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation angewiesen sind, die zum Datenleck verwendet werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die aus einem fenced frame geöffnet werden. Andernfalls könnten sie verwendet werden, um Informationen an andere Ursprünge zu leaken. Jeder neue Tab, der aus einem fenced frame geöffnet wird, wird `rel="noopener"` und `Cross-Origin-Opener-Policy: same-origin` gesetzt haben, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und ihn in seine eigene Browsing-Kontextgruppe setzt.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für eingebettete Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Datenschutzprobleme zu mindern. Damit ein fenced frame geladen wird, müssen Sie keinen `sandbox`-CSP angeben (was die unten stehenden Werte impliziert) oder die folgenden `sandbox`-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload` Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Ereignisse werden auf fenced frames nicht ausgelöst, da sie Informationen in Form eines Page-Deletions-Zeitstempels leaken können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte in ihm angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die fenced frame Funktionalität relevant sind. Nur für eingebettete Dokumente in einem `<fencedframe>` verfügbar.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen auf andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt bestimmte Zeichenfolgen in der zugeordneten URL, die einem bestimmten opaken URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entsprechen.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für eingebettete Dokumente in einem `<fencedframe>` verfügbar.

## Einschreibung und lokale Tests

Bestimmte API-Funktionen, die `FencedFrameConfig`s erzeugen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einen [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einschreiben. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame Code immer noch lokal ohne Einschreibung testen. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API-Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Das Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
