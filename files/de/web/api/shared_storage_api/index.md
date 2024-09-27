---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermodus, der eine unpartitionierte, domänenübergreifende Datenzugriffsmechanismus ermöglicht, während der Datenschutz gewährleistet wird (d. h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine der Hauptursachen für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Drittanbieter-Inhalten gesetzt werden, die in Websites eingebettet sind (beispielsweise über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen, zu profilieren und Informationen über Websites hinweg zu teilen.

Um domänenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache-API](/de/docs/Web/API/Cache). Ein großes Hindernis hierbei ist jedoch die Notwendigkeit für mehrere legitime Anwendungsfälle, die auf domänenübergreifendem Informationsaustausch beruhen. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über Websites hinweg messen und Berichte erstellen möchten, sowie Website-Betreiber, die Benutzererfahrungen basierend auf der Benutzergruppe oder früheren Interaktionen anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Datenspeicher-, Verarbeitungs- und Freigabefunktionen bereitzustellen, ohne die Möglichkeit, Benutzer zu verfolgen und zu profilieren.

Wie andere Speicher-APIs können Sie jederzeit in den geteilten Speicher schreiben. Sie können jedoch Daten aus dem geteilten Speicher nur innerhalb eines [Worklets](/de/docs/Web/API/SharedStorageWorklet) lesen. Worklets bieten eine sichere Umgebung, in der Sie Daten aus dem geteilten Speicher verarbeiten und nützliche Ergebnisse zurückgeben können, jedoch können Sie die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem geteilten Speicherarbeitsbereich zu extrahieren, müssen Sie ein **Ausgabegate** verwenden. Diese Gates dienen bestimmten Zwecken, wie zum Beispiel der Auswahl einer URL aus einer bereitgestellten Liste, die dem Benutzer basierend auf den Daten im geteilten Speicher angezeigt wird. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher innerhalb eines [eingezäunten Rahmens](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Ausgabegates

Die derzeit verfügbaren Ausgabegates für die Shared Storage API werden in den folgenden Abschnitten erläutert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Wahrscheinlich werden in Zukunft weitere Ausgabegates hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Ausgabegate, aufgerufen über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL), wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf den Daten im geteilten Speicher angezeigt werden soll. Dieses Gate kann für folgende Zwecke genutzt werden:

- [**Kreativrotation**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/creative-rotation): Verwendung gespeicherter Daten wie Kreativ-IDs, Aufrufanzahlen und Benutzerinteraktionen, um festzulegen, welche kreativen Inhalte Benutzer auf verschiedenen Websites sehen. Dieser Ansatz hilft, Aufrufe auszubalancieren und eine Überbelichtung bestimmter Inhalte zu vermeiden, wodurch eine negative Benutzererfahrung vermieden werden kann.
- [**A/B-Tests**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing): Zuweisung eines Benutzers zu einer Experimentgruppe und Abspeicherung der Gruppendetails im geteilten Speicher für domänenübergreifenden Zugriff.
- [**Benutzerdefinierte Erlebnisse**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/known-customer): Teilen von benutzerdefinierten Inhalten und Handlungsaufforderungen basierend auf dem Registrierungsstatus oder anderen Benutzerzuständen.

### Ausführen

Das **Ausführen**-Ausgabegate, aufgerufen über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run), soll auf generische Weise verwendet werden, um einige Daten aus dem geteilten Speicher zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Ausführen-Ausgabegate verwenden, um Daten aus dem geteilten Speicher zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Berichterstattung zur einzigartigen Reichweite**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsersteller und Werbetreibende möchten oft wissen, wie viele einzigartige Zuschauer ihre Inhalte haben. Sie können den geteilten Speicher verwenden, um das erste Mal zu melden, dass ein Benutzer Ihre Anzeige oder eingebettete Publikation sieht, und eine doppelte Zählung desselben Benutzers auf einer anderen Website zu verhindern und so einen aggregierten, verrauschten Bericht zur ungefähren einzigartigen Reichweite zu erhalten.
- [**Berichterstattung zu demografischen Benutzerdaten**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsersteller möchten oft die Demografie ihres Publikums verstehen. Sie können den geteilten Speicher verwenden, um demografische Benutzerdaten auf Ihrer Hauptwebsite zu erfassen und mit aggregierter Berichterstattung darüber auf anderen Websites in eingebetteten Kontexten zu berichten.
- [**K+-Häufigkeitsmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Häufigkeit auf die Mindestanzahl an Ansichten, die erforderlich sind, damit ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (häufig im Kontext von Anzeigenausspielungen verwendet). Sie können den geteilten Speicher verwenden, um Berichte über einzigartige Benutzer zu erstellen, die ein bestimmtes Stück Inhalt mindestens K Mal gesehen haben.

## Wie der geteilte Speicher funktioniert

Es gibt zwei Teile zur Nutzung der Shared Storage API — das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten davon. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testing](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird einem Benutzer eine Experimentgruppe zugewiesen und die Gruppendetails werden im geteilten Speicher gespeichert. Andere Websites können diese Daten nutzen, wenn sie eine URL auswählen, die in einem [eingezäunten Rahmen](/de/docs/Web/API/Fenced_frame_API) angezeigt wird.

### Schreiben in den geteilten Speicher

Das Schreiben von Daten in den geteilten Speicher ist einfach — Sie verwenden Methoden, die auf der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Hauptbrowsing-Kontext, in dem Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres geteilten Speicherarbeitsbereichs, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testing-Beispiel definieren wir eine Funktion im App-Kontext, die eine Zufallszahl generiert — 0 oder 1 —, um eine Experimentgruppe darzustellen. Wir führen dann die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im geteilten Speicher zu speichern:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

> [!NOTE]
> Die `ignoreIfPresent: true`-Option bewirkt, dass die `set()`-Funktion abbricht, wenn der geteilte Speicher bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem geteilten Speicher

Wie bereits erwähnt, müssen Sie ein **Ausgabegate** verwenden, um nützliche Ergebnisse aus einem geteilten Speicherarbeitsbereich zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgabegate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL in einem eingezäunten Rahmen basierend auf ihrer Gruppe anzuzeigen.

Um das Ausgabegate zu nutzen, müssen Sie:

1. Eine Operation in einem Arbeitsbereichsmodulskript definieren, um das Auswählen der URL zu handhaben, und diese registrieren.
2. Das Modul Ihrem geteilten Speicherarbeitsbereich hinzufügen.
3. Die URL mit der Arbeitsbereichsoperation auswählen und in einem eingezäunten Rahmen laden.

Im Folgenden betrachten wir diese Schritte einen nach dem anderen.

#### Definition einer Operation in einem Arbeitsbereichsmodul

Die URL-Auswahl basiert auf der Experimentgruppe, die im geteilten Speicher gespeichert ist. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die rohen Daten vor anderen Kontexten verborgen bleiben und somit der Datenschutz gewahrt bleibt.

Die URL-Auswahloperation ist eine JavaScript-Klasse, die den folgenden Regeln folgen muss (diese Regeln variieren je nach Verwendung des Ausgabegates):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter (bei Aufruf ist das Datenargument optional) nimmt.
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Ausgabegate hat eine entsprechende Schnittstelle, die die erforderliche Struktur seiner Klasse und `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

Sobald die Operation definiert ist, muss sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert werden.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from shared storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Zur Wiederholung, um die Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem geteilten Speicher nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im gleichen geteilten Speicherarbeitsbereich-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Hinzufügen des Moduls zum geteilten Speicherarbeitsbereich

Um die im Arbeitsbereichsmodul definierte Operation zu nutzen, muss sie mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) dem geteilten Speicherarbeitsbereich hinzugefügt werden. In unserem Haupt-App-Kontext erfolgt dies, bevor wir den Experimentgruppenwert festlegen, damit er bei Bedarf einsatzbereit ist:

```js
async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

#### Wählen Sie eine URL aus und laden Sie sie in einem eingezäunten Rahmen

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Stellvertreter für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne dass Daten durchsickern. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der geeigneten Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben diskutiert.

`selectURL()` erwartet ein Array von Objekten mit URLs zur Auswahl, ein optionales Optionsobjekt, und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, die zum Auswählen einer URL verwendet werden kann.

```js
// Run the URL selection operation
const fencedFrameConfig = await window.sharedStorage.selectURL(
  "ab-testing",
  [
    { url: `https://your-server.example/content/default-content.html` },
    { url: `https://your-server.example/content/experiment-content-a.html` },
  ],
  {
    resolveToConfig: true,
  },
);
```

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft festgelegt werden, wodurch der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige App-Skript sieht folgendermaßen aus:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Run the URL selection operation
  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "ab-testing",
    [
      { url: `https://your-server.example/content/default-content.html` },
      { url: `https://your-server.example/content/experiment-content-a.html` },
    ],
    {
      resolveToConfig: true,
    },
  );

  // Render the chosen URL into a fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

## Unterschiede zwischen geteiltem Speicher und Webspeicher

Der Hauptunterschied besteht darin, dass der geteilte Speicher für die Verwendung mit domänenübergreifenden Daten nach der Partitionierung bestimmt ist.

- Wenn Sie ein Herausgeber sind und erstanbieterbezogene Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version des [Webspeichers](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website arbeiten und Daten von dieser Website aufzeichnen möchten, um später auf einer anderen Website darauf zuzugreifen, verwenden Sie den geteilten Speicher.

Ein weiterer wichtiger Unterschied zwischen geteiltem Speicher und Webspeicher besteht darin, dass das Lesen aus dem geteilten Speicher gesichert ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit geteiltem Speicher kann das Lesen nur innerhalb einer geteilten Speicherarbeitsumgebung erfolgen, und der Ursprung, der zum Lesen in der Arbeitsumgebung verwendet wird, ist derselbe wie der Browserkontext, der ihn erstellt hat.

Außerdem können Sie Daten aus dem geteilten Speicher nicht außerhalb einer geteilten Speicherarbeitsumgebung extrahieren, um Tracking-Schutz zu gewährleisten. Sie müssen eines der Ausgabegates verwenden, um mit Ihren Daten im geteilten Speicher zu arbeiten.

Zuletzt bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Daten im geteilten Speicher 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung. Definiert Methoden zum Schreiben von Daten in den geteilten Speicher.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung, wie er einem standardmäßigen Browsing-Kontext ausgesetzt ist. Unter anderem definiert er Methoden zur Verwendung der verfügbaren Ausgabegates, die als Stellvertreter für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert er Methoden zum Lesen der geteilten Speicher-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das geteilte Speicher-Worklet des aktuellen Ursprungs. Es enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) zum Hinzufügen von Modulen. Anders als ein reguläres [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul enthalten.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und zum [Zugriff auf den geteilten Speicher](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen der Ausgabegate

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Ausgabegate-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Ausführen-Ausgabegate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgabegate-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihrer Website zu verwenden, müssen Sie sie im [Datenschutz-Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Andernfalls werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihr Shared Storage API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Private Aggregation API-Beispiele enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
