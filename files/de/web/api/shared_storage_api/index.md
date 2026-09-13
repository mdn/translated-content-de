---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("Shared Storage API")}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browser-Anbieter abgelehnt.
> Einzelheiten finden Sie im Abschnitt [Standards positions](#standards-positionen) unten.

Die **Shared Storage API** ist ein clientseitiger Speichermachanismus, der unpartitionierten, websiteübergreifenden Datenzugriff ermöglicht und gleichzeitig die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die in eingebetteten Inhalten von Drittanbietern auf Websites gesetzt werden (z. B. über {{htmlelement("iframe")}}-Elemente). Diese Cookies können genutzt werden, um Nutzer zu verfolgen und zu profilieren sowie Informationen zwischen Websites auszutauschen.

Um eine websiteübergreifende Verfolgung zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis dabei ist jedoch der Bedarf an mehreren legitimen Anwendungsfällen, die auf den Austausch von Informationen zwischen Websites angewiesen sind. Beispiele solcher Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen auf verschiedenen Websites messen und Berichte erstellen möchten, sowie Website-Betreiber, die Nutzererfahrungen basierend auf der Gruppe, in der sich die Nutzer befinden, oder ihren vorherigen Interaktionen mit der Website anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Daten-Speicher-, Verarbeitungs- und Sharing-Funktionen bereitzustellen, ohne die Möglichkeit, Nutzer zu verfolgen und zu profilieren.

Wie bei anderen Storage-APIs können Sie jederzeit in den Shared Storage schreiben. Sie können jedoch die Shared Storage-Daten nur von innerhalb eines [Worklets](/de/docs/Web/API/SharedStorageWorklet) lesen. Worklets bieten eine sichere Umgebung, in der Sie Shared Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können. Sie können die Daten jedoch nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, müssen Sie ein **Ausgangstor** verwenden. Diese Tore dienen bestimmten Zwecken, z.B. der Auswahl einer URL aus einer bereitgestellten Liste, die dem Nutzer basierend auf Shared Storage-Daten angezeigt wird. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Ausgangstore

Die derzeit verfügbaren Ausgangstore für die Shared Storage API werden in den untenstehenden Abschnitten diskutiert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Tor auf und geben Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Weitere Ausgangstore werden wahrscheinlich in Zukunft hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Ausgangstor, auf das über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode zugegriffen wird, wird verwendet, um eine URL aus einer bereitgestellten Liste basierend auf Shared Storage-Daten auszuwählen und dem Nutzer anzuzeigen. Dieses Tor kann für folgende Zwecke verwendet werden:

- [**Creative Rotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Nutzen Sie gespeicherte Daten wie kreative IDs, Anzeigenanzahlen und Nutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Nutzer auf verschiedenen Websites sehen. Dieser Ansatz hilft, Ansichten auszugleichen und die Überexposition bestimmter Inhalte zu vermeiden, was wiederum dazu beitragen kann, eine negative Nutzererfahrung zu vermeiden.
- [**A/B-Tests**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einem Nutzer eine Experimentgruppe zu und speichern Sie die Gruppendetails im Shared Storage für den websiteübergreifenden Zugriff.
- [**Benutzerdefinierte Erlebnisse**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Call-to-Actions basierend auf dem Registrierungsstatus eines Nutzers oder anderen Nutzerzuständen.

### Ausführen

Das **Ausführen**-Ausgangstor, auf das über die [`run()`](/de/docs/Web/API/WindowSharedStorage/run)-Methode zugegriffen wird, ist dazu gedacht, gemeinsam genutzte Speicherdaten in einer generischen Weise zu verarbeiten.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Run-Ausgangstor nutzen, um gemeinsame Speicherdaten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Einzigartige Reichweitenberichterstattung**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft wissen, wie viele einzigartige Betrachter ihre Inhalte haben. Sie können den Shared Storage nutzen, um das erste Mal zu berichten, dass ein Nutzer Ihre Anzeige oder eingebettete Veröffentlichung sieht und doppelte Zählungen für den gleichen Nutzer auf einer anderen Seite zu verhindern, wodurch Sie einen aggregierten, verrauschten Bericht einer ungefähren einzigartigen Reichweite erhalten.
- [**Demografische Berichterstattung von Nutzern**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten wollen oft die Demografie ihres Publikums verstehen. Sie können den Shared Storage verwenden, um demografische Nutzerdaten auf Ihrer Hauptsite zu speichern und aggregierte Berichte darüber zu erstellen, auf die auf anderen Seiten in eingebetteten Kontexten berichtet wird.
- [**K+ Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Frequenz auf die Mindestanzahl von Ansichten, die benötigt werden, bevor ein Nutzer bestimmte Inhalte wiedererkennt oder sich daran erinnert (häufig im Kontext von Anzeigeansichten verwendet). Sie können den Shared Storage verwenden, um Berichte über einzigartige Nutzer zu erstellen, die ein Stück Inhalt mindestens K-mal gesehen haben.

## Verstehen, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Nutzung der Shared Storage API – das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testing](https://privacysandbox.google.com/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird einem Nutzer eine Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Seiten können diese Daten beim Auswählen einer URL zur Anzeige in einem [Fenced Frame](/de/docs/Web/API/Fenced_frame_API) verwenden.

### Schreiben in den Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach – Sie verwenden Methoden, die in der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzufügen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen]/[löschen](/de/docs/Web/API/SharedStorage/delete)/[clear](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität steht in zwei verschiedenen Kontexten zur Verfügung:

- Im Hauptbrowsing-Kontext, in dem Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Test-Beispiel definieren wir eine Funktion in unserem App-Kontext, die eine Zufallszahl — 0 oder 1 — generiert, um eine Experimentgruppe darzustellen. Wir führen dann die [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set)-Funktion aus, um den Nutzer einer Gruppe zuzuweisen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die `set()`-Funktion abbricht, wenn der Shared Storage bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, müssen Sie ein **Ausgangstor** verwenden, um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgangstor](#url-auswahl), um die Experimentgruppe des Nutzers zu lesen und dann eine URL in einem Fenced Frame basierend auf seiner Gruppe anzuzeigen.

Um das Ausgangstor zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die Wahl der URL zu handhaben, und sie registrieren.
2. Das Modul zu Ihrem Shared Storage-Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem Fenced Frame laden.

Im Folgenden sehen wir uns diese Schritte nacheinander an.

#### Definieren Sie eine Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der Experimentgruppe, die im Shared Storage gespeichert ist. Um diesen Wert abzurufen und basierend darauf eine URL auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen sind und somit die Privatsphäre gewahrt bleibt.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren je nach Ausgangstor, je nach ihrem beabsichtigten Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten enthält, die URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter aufnehmen (wenn sie aufgerufen wird, ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Ausgangstor hat eine entsprechende Schnittstelle, die die erforderliche Struktur seiner Klasse und `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem Shared Storage nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im gleichen Shared Storage-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Fügen Sie das Modul zum Shared Storage-Worklet hinzu

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem Shared Storage-Worklet über [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Haupt-App-Kontext erfolgt dies, bevor wir den Wert der Experimentgruppe setzen, sodass er bereit ist, wenn er benötigt wird:

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

#### Wählen Sie eine URL aus und laden Sie sie in einem Fenced Frame

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu leaken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der geeigneten Klassenstruktur für eine URL-Auswahl-Operation definiert wurde, wie oben erläutert.

`selectURL()` erwartet ein Array von Objekten, das URLs zur Auswahl enthält, ein optionales Optionsobjekt und dass die zugrundeliegende Operation eine Ganzzahl zurückgibt, die sie verwendet, um eine URL auszuwählen.

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

Das gesamte App-Skript sieht folgendermaßen aus:

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

Der wesentliche Unterschied besteht darin, dass Shared Storage für die Verwendung mit daten nach der Partitionierung vorgesehen ist, die ursprungsübergreifend sind.

- Wenn Sie ein Publisher sind und First-Party-Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version des [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website tätig sind und Daten von dieser Website aufzeichnen möchten, um später darauf zuzugreifen, verwenden Sie shared storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage besteht darin, dass das Lesen von Shared Storage (wie auch das Schreiben in den Speicher) geschützt ist. Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage-Worklets erfolgen, und der Ursprung, der im Worklet verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Zusätzlich können Sie keine Shared Storage-Daten außerhalb eines Shared Storage-Worklets extrahieren, als Schutz gegen Tracking. Sie müssen eines der Ausgangstore verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Zuletzt bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsing-Sitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden, um Daten in den Shared Storage zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er einem normalen Browsing-Kontext zur Verfügung steht. Unter anderem definiert es Methoden, um die verfügbaren Ausgangstore zu nutzen, die als Proxys für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden, um die Shared Storage-Daten zu lesen.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert den aktuellen Ursprung's Shared Storage-Worklet. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Anders als ein normales [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` nur mit einem einzigen Modul bestückt werden, aus Gründen des Datenschutzes.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zur [Registrierung](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und [den Zugriff auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Ausgangstor-Operationssignaturdefinitionen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle unterschiedlichen Ausgangstor-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Ausgangstor-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgangstor-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie sie im [Privaatsphäre-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) spezifizieren. Andernfalls funktionieren die Methoden der Shared Storage API nicht erfolgreich.

Sie können Ihren Shared Storage API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Beispiele der Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/646)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
