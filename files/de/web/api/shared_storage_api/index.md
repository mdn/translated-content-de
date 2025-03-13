---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der unpartitionierten, seitenübergreifenden Datenzugriff unter Wahrung der Privatsphäre ermöglicht (d. h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Drittanbieter-Inhalten gesetzt werden, die in Websites eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können dazu verwendet werden, Benutzer zu verfolgen und zu profilieren und Informationen über Sites hinweg zu teilen.

Um seitenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis auf dem Weg dahin ist jedoch der Bedarf an mehreren legitimen Anwendungsfällen, die auf den Austausch von Informationen über Seiten hinweg angewiesen sind. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen seitenübergreifend messen und Berichte erstellen möchten, und Website-Betreiber, die Benutzererfahrungen basierend auf der Gruppe, in der sie sind, oder ihren vorherigen Site-Interaktionen anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Funktionen zur Datenspeicherung, Verarbeitung und Teilen bereitzustellen, ohne die Fähigkeit, Benutzer zu verfolgen und zu profilieren.

Wie bei anderen Storage-APIs können Sie jederzeit in den gemeinsamen Speicher schreiben. Sie können jedoch nur innerhalb eines [Worklets](/de/docs/Web/API/SharedStorageWorklet) auf Shared-Storage-Daten zugreifen. Worklets bieten eine sichere Umgebung, in der Sie Shared-Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, jedoch können Sie die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared-Storage-Worklet zu extrahieren, müssen Sie ein **Ausgabegate** verwenden. Diese Gates dienen spezifischen Zwecken, wie zum Beispiel der Auswahl einer URL aus einer bereitgestellten Liste, die dem Benutzer basierend auf den Shared-Storage-Daten angezeigt wird. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie von der einbettenden Seite nicht abgerufen werden können.

## Ausgabegates

Die derzeit für die Shared Storage API verfügbaren Ausgabegates werden in den folgenden Abschnitten erklärt. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> In Zukunft werden wahrscheinlich weitere Ausgabegates hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Ausgabegate, auf das über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) zugegriffen wird, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf Shared-Storage-Daten angezeigt wird. Dieses Gate kann für folgende Zwecke verwendet werden:

- [**Kreativrotation**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Kreativ-IDs, Sichtanzahl und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer auf verschiedenen Seiten sehen. Dieser Ansatz hilft, Ansichten auszugleichen und eine Überexposition bestimmter Inhalte zu verhindern, was dazu beitragen kann, eine negative Benutzererfahrung zu vermeiden.
- [**A/B-Tests**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing): Weisen Sie einem Benutzer eine Experimentgruppe zu und speichern Sie dann Gruppendetails im Shared Storage für den Zugriff auf verschiedenen Seiten.
- [**Benutzerdefinierte Erlebnisse**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Anmeldestatus eines Benutzers oder anderen Benutzerzuständen.

### Ausführen

Das **Run**-Ausgabegate, auf das über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run) zugegriffen wird, soll generisch verwendet werden, um einige Shared-Storage-Daten zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Run-Ausgabegate verwenden, um Shared-Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Berichterstattung über einzigartige Reichweite**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft wissen, wie viele einzigartige Zuschauer ihre Inhalte gesehen haben. Sie können Shared-Storage verwenden, um das erste Mal zu melden, dass ein Benutzer Ihre Anzeige oder eingebettete Veröffentlichung sieht, und doppelte Zählungen für den gleichen Benutzer auf einer anderen Site zu verhindern, wodurch Sie einen aggregierten, geräuschbehafteten Bericht über die ungefähre einzigartige Reichweite erhalten.
- [**Berichterstattung über demographische Benutzerdaten**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die Demografie ihres Publikums verstehen. Sie können Shared-Storage verwenden, um demografische Daten auf Ihrer Hauptseite zu erfassen und die aggregierte Berichterstattung verwenden, um darüber auf anderen Seiten in eingebetteten Kontexten zu berichten.
- [**K+ Frequenzmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal als „effektive Frequenz“ bezeichnet, bezieht sich K+ Frequenz auf die minimale Anzahl von Ansichten, die notwendig sind, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (oft im Kontext von Anzeigenaufrufen verwendet). Sie können Shared-Storage verwenden, um Berichte über eindeutige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verständnis, wie Shared Storage funktioniert

Die Nutzung der Shared Storage API besteht aus zwei Teilen — Daten in den Speicher schreiben und sie lesen/verarbeiten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile behandelt werden, führen wir Sie durch das grundlegende [A/B-Testbeispiel](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing) von developer.chrome.com. In diesem Beispiel wird einem Benutzer eine Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Seiten können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach — Sie verwenden die auf dem [`SharedStorage`](/de/docs/Web/API/SharedStorage) Interface definierten Methoden, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[leeren](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Website oder App ausgeführt wird, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared-Storage-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion im App-Kontext, die eine zufällige Zahl — 0 oder 1 — generiert, um eine Experimentgruppe zu repräsentieren. Dann führen wir die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Benutzer einer Gruppe zuzuordnen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die Funktion `set()` abgebrochen wird, wenn der Shared Storage bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, benötigen Sie ein **Ausgabegate**, um nützliche Ergebnisse aus einem Shared-Storage-Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgabegate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL in einem fenced frame basierend auf ihrer Gruppe anzuzeigen.

Um das Ausgabegate zu verwenden, müssen Sie:

1. Definieren Sie in einem Worklet-Modul-Skript eine Operation zur Auswahl der URL und registrieren Sie sie.
2. Fügen Sie das Modul Ihrem Shared-Storage-Worklet hinzu.
3. Wählen Sie die URL mithilfe der Worklet-Operation aus und laden Sie sie in einem fenced frame.

Nachfolgend werden wir diese Schritte nacheinander betrachten.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der im Shared Storage gespeicherten Experimentgruppe. Um diesen Wert zu erhalten und auf Grundlage dessen eine URL auszuwählen, müssen wir eine Operation im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Auf diese Weise wird garantiert, dass die Rohdaten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt bleibt.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren für jedes Ausgabegate je nach beabsichtigtem Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter annimmt (wenn es aufgerufen wird, ist das Argument data optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Ausgabegate besitzt eine entsprechende Schnittstelle, die die erforderliche Struktur seiner Klasse und der `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

Sobald die Operation definiert ist, muss sie mithilfe von [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert werden.

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

Beachten Sie, wie der im Hauptapp-Kontext festgelegte Wert mithilfe von [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Zur Erinnerung: Um die Privatsphäre zu gewährleisten und Datenlecks zu verhindern, können Werte aus dem Shared Storage nur innerhalb eines Worklets gelesen werden.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage-Worklet-Modulskript mit verschiedenen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Hinzufügen des Moduls zum Shared Storage-Worklet

Um die im Worklet-Modul definierte Operation zu nutzen, muss sie dem Shared Storage-Worklet mithilfe von [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Hauptapp-Kontext erfolgt dies, bevor wir den Experimentgruppeneintrag festlegen, sodass er bereit ist, wenn er benötigt wird:

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

#### Auswählen einer URL und laden sie in einem fenced frame

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, indem sie darauf sicher zugreift und das Ergebnis zurückgibt, ohne Informationen preiszugeben. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da diese mit der entsprechenden Klassenstruktur für eine URL-Auswahl-Operation definiert wurde, wie oben diskutiert.

`selectURL()` erwartet ein Array von Objekten, die URLs enthalten, aus denen gewählt werden soll, ein optionales Optionsobjekt und eine Rückgabe der zugrundeliegenden Operation, die eine ganze Zahl verwendet, um eine URL zu wählen.

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

## Unterschiede zwischen Shared Storage und Web Storage

Der wesentliche Unterschied besteht darin, dass Shared Storage zur Verwendung mit originübergreifenden Daten nach der Partitionierung vorgesehen ist.

- Wenn Sie ein Publisher sind und First-Party-Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`]-Version(/de/docs/Web/API/Window/localStorage) von [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Site agieren und dort Daten erfassen möchten, auf die Sie später auf einer anderen Site zugreifen können, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage ist, dass das Lesen von Shared Storage gesteuert wird (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared-Storage-Worklets erfolgen, und der Ursprung, der im Worklet für das Lesen verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Außerdem können Sie Shared-Storage-Daten nicht außerhalb eines Shared-Storage-Worklets extrahieren, als Tracking-Schutz. Sie müssen eines der Ausgabegates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Schließlich bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Shared-Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden zum Schreiben von Daten in den Shared Storage.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er einem Standard-Browsing-Kontext zur Verfügung steht. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Ausgabegates, die als Proxys für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden zum Lesen der Shared-Storage-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das Shared-Storage-Worklet des aktuellen Ursprungs. Es enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann dem `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul hinzugefügt werden.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und zum [Zugriff auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen der Ausgabegate-Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle unterschiedlichen Typen von Ausgabegate-Operationen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Ausgabegate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgabegate-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie sie im [Anmeldeprozess der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Andernfalls werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie die folgende Chrome-Entwicklerflagge:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos sehen Sie sich die [Shared Storage API-Demowebsite](https://shared-storage-demo.web.app/) an, die auch einige Beispiele zur Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
