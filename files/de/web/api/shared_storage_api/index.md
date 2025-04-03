---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speicher-Mechanismus, der die ungeteilte, seitenübergreifende Datenzugriff ermöglicht und gleichzeitig die Privatsphäre sichert (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Verwendung

Eine Hauptquelle von [Privacy](/de/docs/Web/Privacy) und [Security](/de/docs/Web/Security) Problemen im Web sind Cookies, die auf Drittanbieter-Inhalten gesetzt werden, die in Seiten eingebettet sind (zum Beispiel über {{htmlelement("iframe")}} Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen und zu profilieren und Informationen zwischen Websites auszutauschen.

Um seitenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speicherarten zu partitionieren, darunter [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und die [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis dabei ist jedoch der Bedarf an mehreren legitimen Use Cases, die auf seitenübergreifendem Informationsaustausch beruhen. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen auf verschiedenen Seiten messen und Berichte erstellen möchten, und Website-Besitzer, die das Benutzererlebnis basierend auf der Gruppe, in der sich der Benutzer befindet, oder seinen vorherigen Website-Interaktionen personalisieren möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Datenspeicher-, Verarbeitungs- und Freigabemöglichkeiten zu bieten, ohne Benutzer verfolgen oder profilieren zu können.

Wie andere Speicher-APIs können Sie jederzeit in den geteilten Speicher schreiben. Sie können jedoch nur Daten aus dem geteilten Speicher aus einem [Worklet](/de/docs/Web/API/SharedStorageWorklet) heraus lesen. Worklets bieten eine sichere Umgebung, in der Sie shared storage data verarbeiten und nützliche Ergebnisse zurückgeben können, ohne die Daten direkt mit dem zugehörigen Browsing-Kontext teilen zu können.

Um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren, müssen Sie ein **Output Gate** verwenden. Diese Gates dienen bestimmten Zwecken, wie zum Beispiel einer URL-Auswahl aus einer bereitgestellten Liste, die dem Benutzer basierend auf shared storage data angezeigt wird. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Output Gates

Die derzeit verfügbaren Output Gates für die Shared Storage API werden in den folgenden Abschnitten behandelt. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Code-Beispielen.

> [!NOTE]
> Es ist wahrscheinlich, dass in Zukunft weitere Output Gates hinzugefügt werden, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Output Gate, das über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) Methode zugänglich ist, wird verwendet, um eine URL aus einer bereitgestellten Liste basierend auf shared storage data auszuwählen und dem Nutzer anzuzeigen. Dieses Gate kann zu folgenden Zwecken genutzt werden:

- [**Kreative Rotation**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie kreative IDs, Ansichtsanzahlen und Benutzerinteraktionen, um festzulegen, welche kreativen Inhalte Benutzer auf verschiedenen Websites sehen. Dieser Ansatz hilft, Ansichten auszugleichen und Überbelichtung bestimmter Inhalte zu verhindern, was wiederum zu einem negativen Benutzererlebnis führen kann.
- [**A/B-Tests**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing): Weisen Sie einen Benutzer einer Experimentgruppe zu und speichern Sie Gruppendetails im geteilten Speicher für den seitenübergreifenden Zugriff.
- [**Benutzerdefinierte Erlebnisse**](https://developers.google.com/privacy-sandbox/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Calls-to-Action basierend auf dem Registrierungsstatus oder anderen Benutzerzuständen.

### Laufen

Das **Run**-Output Gate, das über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run) zugänglich ist, soll in allgemeiner Weise verwendet werden, um shared storage data zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Run-Output Gate verwenden, um shared storage data zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Einzigartige Reichweitenberichterstattung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Content-Produzenten und Werbetreibende möchten oft wissen, wie viele einzigartige Zuschauer ihre Inhalte haben. Sie können geteilten Speicher verwenden, um das erste Mal zu melden, wenn ein Benutzer Ihre Anzeige oder eingebettete Veröffentlichung sieht und doppelte Zählungen für denselben Benutzer auf einer anderen Website zu vermeiden, und geben einen aggregierten "Rauschericht" der ungefähren einzigartigen Reichweite.
- [**Benutzer-Demografieberichterstattung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Content-Produzenten möchten oft die Demografie ihres Publikums verstehen. Sie können shared storage verwenden, um Benutzerdemografiedaten auf Ihrer Hauptseite zu speichern und mit aggregierter Berichterstattung über sie auf anderen Websites in eingebetteten Kontexten zu berichten.
- [**K+ Frequenzmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Frequenz auf die minimale Anzahl von Ansichten, die erforderlich sind, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (oft im Kontext von Anzeigenansichten verwendet). Sie können shared storage verwenden, um Berichte über einzigartige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verständnis, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API - das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch ein einfaches [A/B-Testing](https://developers.google.com/privacy-sandbox/private-advertising/select-url/ab-testing) Beispiel von developer.chrome.com. In diesem Beispiel wird ein Benutzer einer Experimentgruppe zugewiesen, und die Gruppendetails werden im geteilten Speicher gespeichert. Andere Websites können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) anzuzeigen ist.

### Schreiben in den gemeinsamen Speicher

Das Schreiben von Daten in geteilten Speicher ist einfach - Sie verwenden Methoden, die in der [`SharedStorage`](/de/docs/Web/API/SharedStorage) Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder [zu löschen](/de/docs/Web/API/SharedStorage/delete)/[zu löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, wo Ihre Site oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres geteilten Speicher-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion in unserem App-Kontext, die eine zufällige Nummer - 0 oder 1 - generiert, um eine Experimentgruppe darzustellen. Dann führen wir die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im geteilten Speicher zu speichern:

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
> Die Option `ignoreIfPresent: true` verursacht, dass die `set()`-Funktion abbricht, wenn der geteilte Speicher bereits ein Datenitem mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem gemeinsamen Speicher

Wie oben erwähnt, um nützliche Ergebnisse aus einem geteilten Speicher-Worklet zu extrahieren, müssen Sie ein **Output Gate** verwenden. In diesem Beispiel verwenden wir das [URL Auswahlausgabe-Gate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann basierend auf ihrer Gruppe eine URL in einem fenced frame anzuzeigen.

Um das Output Gate zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modul-Skript definieren, um die Wahl der URL zu verarbeiten und es zu registrieren.
2. Das Modul zu Ihrem geteilten Speicher-Worklet hinzufügen.
3. Die URL über die Worklet-Operation auswählen und sie in einem fenced frame laden.

Im Folgenden betrachten wir diese Schritte nacheinander.

#### Eine Operation in einem Worklet-Modul definieren

Die URL-Auswahl basiert auf der im geteilten Speicher gespeicherten Experimentgruppe. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die rohen Daten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt wird.

Die URL-Auswahloperation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren für jedes Output Gate, je nach ihrem beabsichtigten Anwendungsfall):

- Die tatsächliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten, das URLs enthält, als ersten Parameter und ein Datenobjekt als zweiten Parameter übernimmt (bei Aufruf ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der ausgewählten URL entspricht.

> [!NOTE]
> Jedes Output Gate verfügt über eine entsprechende Schnittstelle, die die erforderliche Struktur seiner Klasse und der Methode `run()` definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert über [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um zu wiederholen, um Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem geteilten Speicher nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben geteilten Speicher-Worklet-Modul-Skript mit unterschiedlichen Namen zu definieren und zu registrieren. Siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum geteilten Speicher-Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem geteilten Speicher-Worklet mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Haupt-App-Kontext geschieht dies, bevor wir den Experimentgruppenwert setzen, sodass er bereit ist, verwendet zu werden, wenn er benötigt wird:

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

#### Eine URL auswählen und sie in einem fenced frame laden

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation und greift sicher darauf zu, um das Ergebnis zurückzugeben, ohne Daten zu lecken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der entsprechenden Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten, die URLs zur Auswahl enthalten, ein optionales Optionsobjekt und für die zugrunde liegende Operation, um eine Ganzzahl zurückzugeben, die sie zur Auswahl einer URL verwenden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, wodurch der Inhalt der ausgewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das gesamte App-Skript sieht wie folgt aus:

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

Der wesentliche Unterschied besteht darin, dass geteilter Speicher für die Verwendung mit seitenübergreifenden Daten nach der Partitionierung des Speichers vorgesehen ist.

- Wenn Sie ein Publisher sind und First-Party-Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [Webspeicher](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung gespeichert werden, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website tätig sind und Daten von dieser Site aufzeichnen möchten, um sie später auf einer anderen Site abzurufen, verwenden Sie geteilten Speicher.

Ein weiterer wichtiger Unterschied zwischen geteiltem Speicher und Webspeicher besteht darin, dass das Lesen aus geteiltem Speicher geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit geteiltem Speicher kann das Lesen jedoch nur innerhalb eines Shared-Storage-Worklets erfolgen, und der Ursprung, der im Worklet zum Lesen verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Darüber hinaus können Sie Shared-Storage-Daten nicht außerhalb eines Shared-Storage-Worklets extrahieren, als Schutz gegen Tracking. Sie müssen eines der Output Gates verwenden, um mit Ihren Daten im geteilten Speicher zu arbeiten.

Schließlich bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` löscht sich am Ende einer Browsing-Session, während geteilte Speicher-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung. Es definiert Methoden, um Daten in den geteilten Speicher zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung, wie er in einem Standard-Browsing-Kontext verfügbar ist. Unter anderem definiert er Methoden zur Verwendung der verfügbaren Output Gates, die als Proxies für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden zum Lesen der shared storage data.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das aktuelle Ursprungs-Shared-Storage-Worklet. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Anders als ein reguläres [`Worklet`](/de/docs/Web/API/Worklet), kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einziges Modul hinzugefügt bekommen.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Rahmen eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zur [Registrierung](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und [Zugriff auf den geteilten Speicher](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen für Output-Gate-Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Output-Gate-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Output-Gate-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Output-Gate-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API in Ihren Websites zu verwenden, müssen Sie diese im [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) spezifizieren. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared-Storage-API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Beispiele für die Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
