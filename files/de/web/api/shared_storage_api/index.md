---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{DefaultAPISidebar("Shared Storage API")}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browseranbieter abgelehnt.
> Siehe den Abschnitt [Standards positions](#standards_positions) unten für Details.

Die **Shared Storage API** ist ein clientseitiger Speichermodus, der uneingeschränkten, seitenübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Verwendung

Eine Hauptquelle von [Privatsphäre-](/de/docs/Web/Privacy) und [Sicherheits](/de/docs/Web/Security)-problemen im Web ist die Verwendung von Cookies, die auf Drittanbieterinhalten gesetzt werden, die in Webseiten eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen und zu profilieren und Informationen über Websites hinweg zu teilen.

Um ein seitenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und die [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis bei der Erreichung dieses Ziels ist jedoch die Notwendigkeit mehrerer legitimer Anwendungsfälle, die auf das Teilen von Informationen über Websites hinweg angewiesen sind. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über Websites hinweg messen und Berichte erstellen möchten, sowie Website-Betreiber, die die Benutzererfahrung basierend auf der Gruppe, in der sie sich befinden, oder ihren früheren Interaktionen mit der Website anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die benötigten Datenstorage-, Verarbeitungs- und Freigabefunktionen bereitzustellen, ohne die Möglichkeit, Benutzer zu verfolgen und zu profilieren.

Wie bei anderen Speicher-APIs können Sie jederzeit Daten in den gemeinsamen Speicher schreiben. Sie können jedoch nur innerhalb eines [worklet](/de/docs/Web/API/SharedStorageWorklet) auf Daten im gemeinsamen Speicher zugreifen. Worklets bieten eine sichere Umgebung, in der Sie gemeinsam gespeicherte Daten verarbeiten und nützliche Ergebnisse zurückgeben können, aber Sie können die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem gemeinsam genutzten Speicherworklet zu extrahieren, müssen Sie ein **Ausgangstor** verwenden. Diese Tore erfüllen bestimmte Zwecke, wie das Auswählen einer URL aus einer bereitgestellten Liste, um sie dem Benutzer basierend auf gemeinsam gespeicherten Daten anzuzeigen. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) gezeigt, wo sie von der eingebetteten Seite nicht zugänglich sind.

## Ausgangstore

Die derzeit verfügbaren Ausgangstore für die Shared Storage API werden in den folgenden Abschnitten besprochen. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Tor auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> In Zukunft werden wahrscheinlich mehr Ausgangstore hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl** Ausgangstor, das über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode aufgerufen wird, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die basierend auf gemeinsam gespeicherten Daten angezeigt werden soll. Dieses Tor kann für die folgenden Zwecke genutzt werden:

- [**Kreativrotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie kreative IDs, Ansichtszahlen und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer über verschiedene Websites hinweg sehen. Dieser Ansatz hilft, Ansichten auszugleichen und verhindert eine Überbelastung mit bestimmten Inhalten, was wiederum dazu beiträgt, eine negative Benutzererfahrung zu vermeiden.
- [**A/B-Tests**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einen Benutzer einer Experimentgruppe zu und speichern Sie die Gruppendetails im gemeinsamen Speicher für den Zugriff über verschiedene Websites hinweg.
- [**Benutzerdefinierte Erfahrungen**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus oder anderen Benutzerzuständen eines Benutzers.

### Ausführen

Das **Run** Ausgangstor, das über die [`run()`](/de/docs/Web/API/WindowSharedStorage/run)-Methode aufgerufen wird, soll generell zur Verarbeitung von Daten im gemeinsamen Speicher verwendet werden.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Run Ausgangstor verwenden, um gemeinsam gespeicherte Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Einzigartige Reichweitenberichte**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft die Anzahl der einzigartigen Betrachter ihrer Inhalte kennen. Sie können den gemeinsamen Speicher verwenden, um das erste Mal zu melden, wenn ein Benutzer Ihre Anzeige oder Veröffentlichung sieht, und doppelte Zählungen desselben Benutzers auf einer anderen Website zu verhindern, was Ihnen einen aggregierten verrauschten Bericht über die ungefähre einzigartige Reichweite gibt.
- [**Benutzerdemografieberichte**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die Demografie ihres Publikums verstehen. Sie können den gemeinsamen Speicher verwenden, um demografische Daten von Benutzern auf Ihrer Hauptseite zu speichern und aggregierte Berichte darüber auf anderen Websites in eingebetteten Kontexten zu erstellen.
- [**K+ Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Frequenz auf die minimale Anzahl von Ansichten, die erforderlich ist, bevor ein Benutzer bestimmten Inhalt erkennt oder erinnert (oft im Kontext von Anzeigenansichten verwendet). Sie können den gemeinsamen Speicher nutzen, um Berichte über einzigartige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verstehen, wie gemeinsamer Speicher funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API — das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Tests](https://privacysandbox.google.com/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Benutzer einer Experimentgruppe zugewiesen, und die Gruppendetails werden im gemeinsamen Speicher gespeichert. Andere Websites können diese Daten verwenden, um eine URL in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) anzuzeigen.

### Schreiben in den gemeinsamen Speicher

Das Schreiben von Daten in den gemeinsamen Speicher ist einfach — Sie verwenden Methoden, die im [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Interface definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [hinzuzufügen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[leeren](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Hauptbrowsing-Kontext, wo Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres gemeinsamen Speicherworklets auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion in unserem App-Kontext, die eine Zufallszahl — 0 oder 1 — generiert, um eine Experimentgruppe zu repräsentieren. Dann führen wir die [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set)-Funktion aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im gemeinsamen Speicher zu speichern:

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
> Die Option `ignoreIfPresent: true` sorgt dafür, dass die `set()`-Funktion abbricht, wenn der gemeinsame Speicher bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem gemeinsamen Speicher

Wie oben erwähnt, müssen Sie ein **Ausgangstor** nutzen, um nützliche Ergebnisse aus einem gemeinsamen Speicherworklet zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgangstor](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL in einem fenced frame basierend auf ihrer Gruppe anzuzeigen.

Um das Ausgangstor zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um das Auswählen der URL zu handhaben, und sie registrieren.
2. Das Modul zu Ihrem gemeinsamen Speicherworklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Nachfolgend betrachten wir diese Schritte nacheinander.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der Experimentgruppe, die im gemeinsamen Speicher abgelegt ist. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben, wodurch die Privatsphäre gewahrt wird.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die den folgenden Regeln folgen muss (diese Regeln variieren je nach Ausgangstor, abhängig von ihrem beabsichtigten Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter übernimmt (beim Aufruf ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Ausgangstor hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mithilfe von [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu verhindern, können Sie Werte aus dem gemeinsamen Speicher nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben gemeinsamen Speicherworklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Hinzufügen des Moduls zum gemeinsamen Speicherworklet

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) zum gemeinsamen Speicherworklet hinzugefügt werden. In unserem Haupt-App-Kontext erfolgt dies, bevor wir den Experimentgruppenwert setzen, damit er bei Bedarf einsatzbereit ist:

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

#### Wählen Sie eine URL und laden Sie sie in einem Fenced Frame

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher auf sie zu und gibt das Ergebnis zurück, ohne Daten offenzulegen. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der geeigneten Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten mit URLs zur Auswahl, ein optionales Optionsobjekt, und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, die sie zur Auswahl einer URL verwenden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird die zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, wodurch der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

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

## Unterschiede zwischen gemeinsamem Speicher und Webspeicher

Der Hauptunterschied besteht darin, dass der gemeinsame Speicher zur Verwendung mit seitenübergreifenden Daten bestimmt ist, nachdem der Speicher partitioniert wurde.

- Wenn Sie ein Publisher sind und Erstanbieter-Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [Webspeicher](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung erhalten bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Seite tätig sind und Daten von dieser Seite aufzeichnen möchten, um später auf einer anderen Seite darauf zuzugreifen, verwenden Sie den gemeinsamen Speicher.

Ein weiterer wichtiger Unterschied zwischen gemeinsamem Speicher und Webspeicher ist, dass das Lesen aus gemeinsamem Speicher geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Bei gemeinsamem Speicher kann das Lesen nur innerhalb eines gemeinsamen Speicherworklets erfolgen, und der Ursprung, der zum Lesen im Worklet verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Außerdem können Sie keine gemeinsam gespeicherten Daten außerhalb eines gemeinsamen Speicherworklets extrahieren, als ein Tracking-Schutz. Sie müssen eines der Ausgangstore verwenden, um mit Ihren im gemeinsamen Speicher gespeicherten Daten zu arbeiten.

Zuletzt verbleiben Daten in `localStorage` bis sie manuell gelöscht werden. `sessionStorage` löscht sich am Ende einer Browsersitzung, während Daten im gemeinsamen Speicher 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung. Es definiert Methoden zum Schreiben von Daten in den gemeinsamen Speicher.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung, wie er in einem Standard-Browsing-Kontext zugänglich ist. Unter anderem definiert er Methoden zur Verwendung der verfügbaren Ausgangstore, die als Proxies für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontextes. Unter anderem definiert er Methoden zum Lesen der Daten im gemeinsamen Speicher.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das gemeinsame Speicherworklet des aktuellen Ursprungs. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul hinzugefügt bekommen.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Gültigkeitsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität, um eine definierte Operation zu [registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) und [auf den gemeinsamen Speicher zuzugreifen](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen der Ausgangstor-Operation

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Ausgabetor-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Ausgabator-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgangstor-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Einschreibung und lokales Testen

Um die Shared Storage API auf Ihren Websites zu nutzen, müssen Sie sie im [Einschreibungsprozess der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) spezifizieren. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal ohne Einschreibung testen. Um lokales Testen zu ermöglichen, aktivieren Sie die folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Umfassende Demos finden Sie auf der [Shared Storage API Demo-Website](https://shared-storage-demo.web.app/), die auch einige Private Aggregation API-Beispiele enthält.

## Spezifikationen

{{Specifications}}

### Standards positions

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/646)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
