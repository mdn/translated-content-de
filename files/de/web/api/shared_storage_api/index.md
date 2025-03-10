---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der eine unpartitionierte, domänenübergreifende Datenzugriffsmöglichkeit bietet und gleichzeitig die Privatsphäre bewahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine große Quelle für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Drittanbieterinhalten gesetzt werden, die in Seiten eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können genutzt werden, um Benutzer zu verfolgen und zu profilieren sowie Informationen über Domänen hinweg zu teilen.

Um domänenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis hierfür sind jedoch mehrere legitime Anwendungsfälle, die auf dem Austausch domänenübergreifender Informationen beruhen. Beispiele solcher Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über verschiedene Websites messen und Berichte erstellen möchten, sowie Webseitenbetreiber, die das Benutzererlebnis basierend auf der Benutzergruppe oder früheren Interaktionen personalisieren möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie soll die erforderlichen Speicher-, Verarbeitungs- und Austauschfähigkeiten bieten, ohne die Möglichkeit, Benutzer zu verfolgen und zu profilieren.

Wie andere Speicher-APIs kann auch die Shared Storage jederzeit beschrieben werden. Allerdings können Sie gespeicherte Daten nur innerhalb eines [Worklets](/de/docs/Web/API/SharedStorageWorklet) lesen. Worklets bieten eine sichere Umgebung, in der Sie Shared-Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, jedoch können Sie die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, müssen Sie ein **Output Gate** nutzen. Diese Gates erfüllen bestimmte Zwecke, wie das Auswählen einer URL aus einer bereitgestellten Liste, die dem Benutzer basierend auf Shared Storage-Daten angezeigt wird. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie von der einbettenden Seite nicht zugänglich sind.

## Output Gates

Die derzeit verfügbaren Output Gates für die Shared Storage API werden in den folgenden Abschnitten besprochen. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Weitere Output Gates werden wahrscheinlich in Zukunft hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Output Gate, aufgerufen über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL), wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen und dem Benutzer anzuzeigen, basierend auf Shared Storage-Daten. Dieses Gate kann für folgende Zwecke genutzt werden:

- [**Creative Rotation**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Anzeigeanzahl und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer auf verschiedenen Webseiten sehen. Dieser Ansatz hilft, Ansichten auszugleichen und eine Überexposition bestimmter Inhalte zu vermeiden, was wiederum hilft, eine negative Benutzererfahrung zu verhindern.
- [**A/B-Tests**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing): Weisen Sie einem Benutzer eine Experimentgruppe zu und speichern Sie die Gruppendetails zur domänenübergreifenden Nutzung im Shared Storage.
- [**Benutzerdefinierte Erlebnisse**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus eines Benutzers oder anderen Benutzerzuständen.

### Ausführen

Das **Run**-Output Gate, aufgerufen über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run), ist vorgesehen für die generische Verarbeitung von Shared-Storage-Daten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Run-Output Gate nutzen, um Shared-Storage-Daten zu verarbeiten und aggregierte Berichte zu erzeugen. Diese Berichte können in den folgenden Anwendungsfällen genutzt werden:

- [**Einzigartige Reichweiten-Berichterstattung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft die Anzahl der einzigartigen Betrachter ihrer Inhalte wissen. Sie können Shared Storage nutzen, um das erste Mal zu melden, wenn ein Benutzer Ihre Anzeige oder eingebettete Publikation sieht, und doppelte Zählungen desselben Benutzers auf einer anderen Seite zu verhindern, was Ihnen einen aggregierten und verrauschten Bericht über die ungefähre einzigartige Reichweite gibt.
- [**Benutzer-Demografieberichte**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die Demografie ihres Publikums verstehen. Sie können Shared Storage nutzen, um demografische Benutzerdaten auf Ihrer Hauptseite zu erfassen und diese mit aggregierten Berichten über andere Webseiten in eingebetteten Kontexten zu berichten.
- [**K+-Frequenzmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal beschrieben als "effektive Frequenz", bezieht sich K+ Frequenz auf die minimale Anzahl von Ansichten, die benötigt werden, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (oft im Kontext von Anzeigenaufrufen verwendet). Sie können Shared Storage nutzen, um Berichte über einzigartige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verstehen, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API — das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testing](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird einem Benutzer eine Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Seiten können diese Daten nutzen, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach — Sie verwenden Methoden, die in der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzufügen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Website oder Anwendung läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testing-Beispiel definieren wir eine Funktion im Anwendungskontext, die eine Zufallszahl — 0 oder 1 — generiert, um eine Experimentgruppe darzustellen. Anschließend führen wir die [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set)-Funktion aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die `set()`-Funktion abbricht, wenn der Shared Storage bereits ein Datenelement mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, müssen Sie ein **Output Gate** verwenden, um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL Selection Output Gate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL basierend auf ihrer Gruppe in einem fenced frame anzuzeigen.

Um das Output Gate zu nutzen, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die Auswahl der URL zu handhaben, und sie registrieren.
2. Das Modul in Ihr Shared Storage-Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Im Folgenden betrachten wir diese Schritte nacheinander.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der Experimentgruppe, die im Shared Storage gespeichert ist. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation im Kontext eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexts versteckt bleiben und somit die Privatsphäre wahren.

Die URL-Auswahloperation ist eine JavaScript-Klasse, die den folgenden Regeln folgen muss (diese Regeln variieren für jedes Output Gate, abhängig von ihrem vorgesehenen Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter nimmt (bei Aufruf ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Output Gate hat eine entsprechende Schnittstelle, die die erforderliche Struktur seiner Klasse und der `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

Sobald die Operation definiert ist, muss sie unter Verwendung von [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert werden.

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

Beachten Sie, wie der im Hauptanwendungskontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu verhindern, können Werte aus dem Shared Storage nur innerhalb eines Worklets gelesen werden.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren. Siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Fügen Sie das Modul zum Shared Storage-Worklet hinzu

Um die in dem Worklet-Modul definierte Operation zu verwenden, muss sie mithilfe von [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) dem Shared Storage-Worklet hinzugefügt werden. In unserem Hauptanwendungskontext geschieht dies, bevor wir den Experimentgruppenwert setzen, sodass er bei Bedarf einsatzbereit ist:

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

#### Wählen Sie eine URL aus und laden Sie sie in einem fenced frame

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Stellvertreter für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu leaken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation auszuführen, da sie mit der entsprechenden Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben besprochen.

`selectURL()` erwartet ein Array von Objekten, das URLs enthält, ein optionales Optionsobjekt und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, die es zur Auswahl einer URL verwenden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, was dazu führt, dass der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige Anwendungsskript sieht folgendermaßen aus:

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

## Unterschiede zwischen Shared Storage und Web Storage

Der Hauptunterschied besteht darin, dass Shared Storage für die Verwendung mit domänenübergreifenden Daten nach der Partitionierung des Speichers vorgesehen ist.

- Wenn Sie ein Herausgeber sind und Erstdaten speichern wollen, die nur Ihnen zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie wollen, dass Daten nur während einer Browser-Sitzung persistent sind, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website agieren und Daten von dieser Website erfassen wollen, um später auf einer anderen Website darauf zuzugreifen, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage ist, dass das Lesen aus dem Shared Storage geschützt ist (schreiben funktioniert ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage-Worklets erfolgen, und der für das Lesen im Worklet verwendete Ursprung ist derselbe wie der Browsing-Kontext, der ihn erstellt hat.

Zusätzlich können Sie keine Shared Storage-Daten außerhalb eines Shared Storage-Worklets extrahieren, als Schutz vor Tracking. Sie müssen eines der Output Gates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Schließlich bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsing-Sitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibvorgang gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Definiert Methoden, um Daten in den Shared Storage zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, der einem standardmäßigen Browsing-Kontext ausgesetzt ist. Definiert unter anderem Methoden zur Nutzung der verfügbaren Output Gates, die als Stellvertreter für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontextes. Definiert unter anderem Methoden zum Lesen der Shared Storage-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert den aktuellen Origin's Shared Storage-Worklet. Enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) zum Hinzufügen von Modulen. Im Gegensatz zu einem normalen [`Worklet`](/de/docs/Web/API/Worklet) kann für das `SharedStorageWorklet` aus Datenschutzgründen nur ein einziges Modul hinzugefügt werden.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Geltungsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Enthält die Funktionalität zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und zum [Zugreifen auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Output Gate Operationssignatur-Definitionen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle unterschiedlichen Output Gate Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Output-Gate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Output-Gate-Operation.

### Erweiterungen für andere Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Registrierung und lokale Tests

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie sie im [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal testen, ohne eine Registrierung. Um lokale Tests zu ermöglichen, aktivieren Sie den folgenden Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfassende Demos siehe die [Shared Storage API Demo-Website](https://shared-storage-demo.web.app/), die auch einige Beispiele zur Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
