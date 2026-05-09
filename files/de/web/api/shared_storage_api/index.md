---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{DefaultAPISidebar("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird momentan von einem Browser-Anbieter abgelehnt.
> Details finden Sie im Abschnitt [Standards Positionen](#standards_positionen) unten.

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der nicht-partitionierten, seitenübergreifenden Datenzugriff ermöglicht und zugleich die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Anwendung

Eine Hauptquelle von [Privatsphäre](/de/docs/Web/Privacy)- und [Sicherheits](/de/docs/Web/Security)-problemen im Web ist der Einsatz von Cookies, die auf Drittinhalten gesetzt werden, die auf Websites eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Nutzer zu verfolgen und zu profilieren sowie Informationen über Sites hinweg zu teilen.

Um seitenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speicherarten zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache-API](/de/docs/Web/API/Cache). Ein großes Hindernis dabei ist jedoch der Bedarf an mehreren legitimen Anwendungsfällen, die auf seitenübergreifenden Informationsaustausch angewiesen sind. Beispiele solcher Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über Sites hinweg messen und Berichte erzeugen möchten, und Seitenbetreiber, die Nutzererfahrungen anpassen möchten, basierend auf der Gruppe, in der sie sind, oder ihren vorherigen Interaktionen auf der Website.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Datenspeicher-, Verarbeitungs- und Freigabefunktionen bereitzustellen, ohne dass die Möglichkeit besteht, Nutzer zu verfolgen und zu profilieren.

Wie bei anderen Speicher-APIs können Sie jederzeit auf den Shared Storage schreiben. Allerdings können Sie Shared Storage-Daten nur aus einem [Worklet](/de/docs/Web/API/SharedStorageWorklet) auslesen. Worklets bieten eine sichere Umgebung, in der Sie Shared Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, ohne dass Sie die Daten direkt mit dem zugehörigen Browsing-Kontext teilen können.

Um nützliche Ergebnisse aus einem Shared-Storage-Worklet zu extrahieren, müssen Sie ein **Output Gate** verwenden. Diese Tore dienen spezifischen Zwecken, wie z.B. der Auswahl einer URL aus einer bereitgestellten Liste, die basierend auf Shared Storage-Daten dem Nutzer angezeigt wird. Ergebnisse, die für den Nutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie von der einbettenden Seite nicht abgerufen werden können.

## Output Gates

Die derzeit verfügbaren Output Gates für die Shared Storage API werden in den folgenden Abschnitten erläutert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Weitere Output Gates werden voraussichtlich in Zukunft hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Output Gate, das über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) aufgerufen wird, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Nutzer basierend auf den Shared Storage-Daten angezeigt werden soll. Dieses Gate kann für folgende Zwecke verwendet werden:

- [**Creative Rotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Anzeigemehrheiten und Nutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Nutzer über verschiedene Sites hinweg sehen. Dieser Ansatz hilft, Anzeigemehrheiten auszugleichen und übermäßige Exposition bestimmter Inhalte zu verhindern, was wiederum eine negative Nutzererfahrung vermeiden kann.
- [**A/B-Testing**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einen Nutzer einer Experimentgruppe zu und speichern Sie dann die Gruppendetails im Shared Storage für den seitenübergreifenden Zugriff.
- [**Benutzerdefinierte Nutzererlebnisse**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen, basierend auf dem Registrierungsstatus eines Nutzers oder anderen Nutzerzuständen.

### Run

Das **Run**-Output Gate, aufgerufen über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run), ist dazu gedacht, auf generische Weise einige Shared Storage-Daten zu verarbeiten.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Run-Output Gate verwenden, um Shared Storage-Daten zu verarbeiten und aggregierte Berichte zu generieren. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Unique Reach Reporting**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende wollen oft die Anzahl der eindeutigen Zuschauer für ihre Inhalte wissen. Sie können Shared Storage verwenden, um das erste Mal zu berichten, dass ein Nutzer Ihre Anzeige oder Ihre eingebettete Publikation sieht und zu vermeiden, dass derselbe Nutzer auf einer anderen Site doppelt gezählt wird, sodass Sie einen aggregierten, verrauschten Bericht über die ungefähre einzigartige Reichweite erhalten.
- [**Nutzer-Demografie-Berichterstattung**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten wollen oft die Demografie ihres Publikums verstehen. Sie können Shared Storage verwenden, um demografische Nutzerdaten auf Ihrer Hauptsite zu erfassen und mit aggregierter Berichterstattung darüber über andere Sites in eingebetteten Kontexten zu berichten.
- [**K+-Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" bezeichnet, bezieht sich die K+-Frequenz auf die minimale Anzahl von Ansichten, die erforderlich sind, bevor ein Nutzer bestimmte Inhalte erkennt oder erinnert (oft im Kontext von Anzeigenansichten verwendet). Sie können Shared Storage verwenden, um Berichte über eindeutige Nutzer zu erstellen, die ein Inhaltsstück mindestens K-mal gesehen haben.

## Verständnis, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Nutzung der Shared Storage API: das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testing](https://privacysandbox.google.com/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Nutzer einer Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Sites können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach — Sie verwenden Methoden, die in der Schnittstelle [`SharedStorage`](/de/docs/Web/API/SharedStorage) definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder [zu löschen](/de/docs/Web/API/SharedStorage/delete)/[zu leeren](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Site oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testing-Beispiel definieren wir eine Funktion in unserem App-Kontext, die eine Zufallszahl — 0 oder 1 — erzeugt, um eine Experimentgruppe zu repräsentieren. Anschließend führen wir die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Nutzer einer Gruppe zuzuweisen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die Funktion `set()` abgebrochen wird, wenn der Shared Storage bereits ein Datenelement mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, müssen Sie, um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, ein **Output Gate** verwenden. In diesem Beispiel werden wir das [URL-Auswahl Output Gate](#url-auswahl) verwenden, um die Experimentgruppe des Nutzers zu lesen und basierend auf dieser Gruppe eine URL in einem fenced frame anzuzeigen.

Um das Output Gate zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die URL-Auswahl zu verwalten, und diese registrieren.
2. Das Modul zu Ihrem Shared Storage-Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Im Folgenden betrachten wir diese Schritte nacheinander.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der im Shared Storage gespeicherten Experimentgruppe. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben, wodurch die Privatsphäre gewahrt wird.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die die folgenden Regeln einhalten muss (diese Regeln variieren je nach Output Gate, abhängig von ihrem beabsichtigten Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter entgegennimmt (wenn aufgerufen, ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Output Gate hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und der Methode `run()` definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um es zu wiederholen, um die Privatsphäre zu erhalten und Datenlecks zu vermeiden, können Werte aus dem Shared Storage nur innerhalb eines Worklets gelesen werden.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum Shared Storage-Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) zum Shared Storage-Worklet hinzugefügt werden. In unserem Haupt-App-Kontext geschieht dies, bevor wir den Experimentgruppenwert setzen, sodass er bereit ist, wenn er benötigt wird:

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

#### Eine URL auswählen und in einem fenced frame laden

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne irgendwelche Daten zu leaken. `selectURL()` ist die korrekte Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der entsprechenden Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben erläutert.

`selectURL()` erwartet ein Array von Objekten, die URLs zur Auswahl enthalten, ein optionales Optionsobjekt, und dass die zugrundeliegende Operation eine Ganzzahl zurückgibt, die sie zur Auswahl einer URL verwenden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der Eigenschaft [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt werden, sodass der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige App-Script sieht folgendermaßen aus:

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

Der Hauptunterschied besteht darin, dass Shared Storage für die Verwendung mit seitenübergreifenden Daten gedacht ist, nachdem die Speicherung partitioniert wurde.

- Wenn Sie ein Publisher sind und Erstanbieterdaten speichern möchten, die nur Ihnen zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [web storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Seite tätig sind und Daten von dieser Seite aufzeichnen möchten, um sie später auf einer anderen Seite zu nutzen, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage besteht darin, dass das Lesen aus dem Shared Storage geschützt ist (das Schreiben funktioniert ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage-Worklets geschehen, und der Ursprung, der im Worklet zum Lesen verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Außerdem können Sie Daten aus dem Shared Storage nicht außerhalb eines Shared Storage-Worklets extrahieren, als Schutz vor Tracking. Sie müssen eines der Output Gates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Zuletzt bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden zum Schreiben von Daten in den Shared Storage.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er in einem Standard-Browsing-Kontext bereitgestellt wird. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Output Gates, die als Proxys für die im Worklet definierten Operationen dienen.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden zum Lesen der Shared Storage-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das Shared Storage-Worklet des aktuellen Ursprungs. Es enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einziges Modul hinzugefügt werden.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität, eine definierte Operation zu [registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) und auf den Shared Storage [zuzugreifen](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Output Gate-Operation Signaturdefinitionen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle unterschiedlichen Output Gate-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Output-Gate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Output-Gate-Operation.

### Erweiterungen für andere Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Einschreibung und lokale Tests

Um die Shared Storage API in Ihren Sites zu verwenden, müssen Sie sie im [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) spezifizieren. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal testen, ohne sich einzuschreiben. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für ausführliche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Beispiele der Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

### Standards Positionen

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/646)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
