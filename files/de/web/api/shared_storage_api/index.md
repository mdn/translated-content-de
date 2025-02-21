---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermecanismus, der nicht partitionierten, seitenübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine große Quelle für [Privatsphäre-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Dritteinhalte gesetzt werden, die in Websites eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen und zu profilieren und Informationen über Websites hinweg zu teilen.

Um das seitenübergreifende Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und die [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis, dies zu erreichen, sind jedoch mehrere legitime Anwendungsfälle, die auf seitenübergreifendes Teilen von Informationen angewiesen sind. Beispiele für solche Anwendungsfälle sind Werbekunden, die die Reichweite ihrer Anzeigen über Websites hinweg messen und Berichte erstellen wollen, sowie Website-Besitzer, die Benutzererfahrungen basierend auf der Gruppe, in der sich ein Benutzer befindet, oder seinen vorherigen Interaktionen mit der Website anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie soll die notwendige Datenspeicherung, Verarbeitung und -teilung ohne die Möglichkeit bereitstellen, Benutzer zu verfolgen und zu profilieren.

Wie bei anderen Speicher-APIs können Sie jederzeit in den Shared Storage schreiben. Der Lesezugriff auf Shared Storage-Daten ist jedoch nur von innerhalb eines [Worklet](/de/docs/Web/API/SharedStorageWorklet) möglich. Worklets bieten eine sichere Umgebung, in der Sie Shared Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, aber Sie können die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, müssen Sie ein **Output-Gate** verwenden. Diese Gates dienen spezifischen Zwecken wie der Auswahl einer URL aus einer bereitgestellten Liste zur Anzeige an den Benutzer basierend auf Shared Storage-Daten. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, in dem sie nicht von der eingebetteten Seite aus zugänglich sind.

## Output-Gates

Die derzeit verfügbaren Output-Gates für die Shared Storage API werden in den Abschnitten unten erläutert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Code-Beispielen.

> [!NOTE]
> In Zukunft werden wahrscheinlich weitere Output-Gates hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL Selection**-Output-Gate, aufgerufen über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die basierend auf Shared Storage-Daten dem Benutzer angezeigt wird. Dieses Gate kann für folgende Zwecke genutzt werden:

- [**Creative Rotation**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Ansichtenanzahl und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer über verschiedene Seiten hinweg zu sehen bekommen. Dieser Ansatz hilft dabei, Ansichten auszugleichen und übermäßige Exposition bestimmter Inhalte zu vermeiden, was wiederum eine negative Benutzererfahrung verhindern kann.
- [**A/B-Tests**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing): Weisen Sie einen Benutzer einer Experimentgruppe zu und speichern Sie dann die Gruppendetails im Shared Storage für den seitenübergreifenden Zugriff.
- [**Benutzerdefinierte Erlebnisse**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus eines Benutzers oder anderen Benutzerzuständen.

### Ausführen

Das **Run**-Output-Gate, aufgerufen über die [`run()`](/de/docs/Web/API/WindowSharedStorage/run)-Methode, soll generisch verwendet werden, um einige Shared Storage-Daten zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Run-Output-Gate verwenden, um Shared Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in folgenden Anwendungsfällen verwendet werden:

- [**Einzigartige Reichweitenberichte**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsersteller und Werbetreibende möchten oft die Anzahl der einzigartigen Zuschauer für ihre Inhalte kennen. Sie können Shared Storage verwenden, um das erste Mal, wenn ein Benutzer Ihre Anzeige oder eingebettete Veröffentlichung sieht, zu melden und doppelte Zählungen für denselben Benutzer auf einer anderen Website zu verhindern, was Ihnen einen aggregierten lärmbehafteten Bericht über die ungefähre einzigartige Reichweite liefert.
- [**Benutzer-Demografie-Berichte**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsersteller möchten oft die Demografien ihres Publikums verstehen. Sie können Shared Storage verwenden, um Benutzerdemografiedaten auf Ihrer Hauptseite zu erfassen und mit aggregierter Berichterstattung darüber auf anderen Websites in eingebetteten Kontexten zu berichten.
- [**K+ Frequenzmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Frequenz auf die Mindestanzahl von Ansichten, die erforderlich sind, bevor ein Benutzer bestimmte Inhalte erkennen oder sich daran erinnern kann (oft im Kontext von Anzeigenansichten verwendet). Sie können Shared Storage verwenden, um Berichte über einzigartige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verständnis, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API — Daten in den Speicher schreiben und diese lesen/verarbeiten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testing](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Benutzer einer Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Websites können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach — Sie verwenden Methoden, die auf der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzufügen](/de/docs/Web/API/SharedStorage/append), oder [zu löschen](/de/docs/Web/API/SharedStorage/delete)/[zu löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Hauptbrowsing-Kontext, in dem Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage Worklet, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion in unserem App-Kontext, die eine zufällige Zahl — 0 oder 1 — generiert, um eine Experimentgruppe darzustellen. Wir führen dann die [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set)-Funktion aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` führt dazu, dass die `set()`-Funktion abbricht, wenn der Shared Storage bereits ein Datenitem mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, müssen Sie ein **Output-Gate** verwenden. In diesem Beispiel verwenden wir das [URL Selection Output-Gate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann basierend auf ihrer Gruppe eine URL in einem fenced frame anzuzeigen.

Um das Output-Gate zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modul-Skript definieren, um die Auswahl der URL zu handhaben, und diese registrieren.
2. Das Modul Ihrem Shared Storage-Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und diese in einem fenced frame laden.

Nachfolgend betrachten wir diese Schritte nacheinander.

#### Eine Operation in einem Worklet-Modul definieren

Die URL-Auswahl basiert auf der Experimentgruppe, die im Shared Storage gespeichert ist. Um diesen Wert abzurufen und basierend darauf eine URL auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die rohen Daten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt bleibt.

Die URL Selection-Operation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese variieren je nach Output-Gate, je nach beabsichtigtem Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die als ersten Parameter ein Array von Objekten mit URLs und als zweiten Parameter ein Datenobjekt nimmt (wenn aufgerufen, ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Anzahl der gewählten URL entspricht.

> [!NOTE]
> Jedes Output-Gate hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und der `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu verhindern, können Sie Werte aus dem Shared Storage nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im gleichen Shared Storage-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum Shared Storage-Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie mithilfe von [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) dem Shared Storage-Worklet hinzugefügt werden. In unserem Haupt-App-Kontext wird dies vor dem Setzen des Experimentgruppe-Wertes gemacht, sodass es bereit ist, verwendet zu werden, wenn es benötigt wird:

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

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy zu unserer Worklet-Operation, auf die sicher zugegriffen und das Ergebnis zurückgegeben wird, ohne dass Daten durchsickern. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der geeigneten Klassenstruktur für eine URL Selection-Operation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten mit URLs, aus denen gewählt wird, ein optionales Optionsobjekt, und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, mit der eine URL ausgewählt werden kann.

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

Das vollständige App-Skript sieht wie folgt aus:

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

Der Hauptunterschied besteht darin, dass Shared Storage für die Verwendung mit sektionsübergreifenden Daten nach der Partitionierung des Speichers gedacht ist.

- Wenn Sie ein Publisher sind und Sie möchten First-Party-Daten speichern, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittpartei auf einer anderen Website agieren und Daten von dieser Website erfassen möchten, um später auf einer anderen Website darauf zuzugreifen, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage besteht darin, dass das Lesen aus dem Shared Storage geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage-Worklets erfolgen, und der für das Lesen im Worklet verwendete Ursprung ist derselbe wie der Browsing-Kontext, der ihn erstellt hat.

Zusätzlich können Sie Shared Storage-Daten außerhalb eines Shared Storage-Worklets nicht extrahieren, als Schutz vor Tracking. Sie müssen eines der Output-Gates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Zuletzt bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsingsession gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden, um Daten in den Shared Storage zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er einem Standard-Browsing-Kontext zur Verfügung steht. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Output-Gates, die als Proxy für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definieren sie Methoden zum Lesen der Shared Storage-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert den Shared Storage Worklet des aktuellen Ursprungs. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul hinzugefügt bekommen.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und [Zugriff auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen für Output-Gate-Betriebsarten

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Operationstypen des Output-Gates.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Output-Gate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL Selection-Output-Gate-Operation.

### Erweiterungen für andere Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie sie im [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Tun Sie dies nicht, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome Developer-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demo-Website](https://shared-storage-demo.web.app/), die auch einige Private Aggregation API-Beispiele enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
