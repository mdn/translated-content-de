---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der unpartitionierten, seitenübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h., ohne sich auf Tracking-Cookies zu verlassen).

## Konzepte und Verwendung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Drittanbieterinhalte gesetzt werden, die in Websites eingebettet sind (beispielsweise über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen und zu profilieren und Informationen zwischen Websites auszutauschen.

Um das seitenübergreifende Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache-API](/de/docs/Web/API/Cache). Ein großes Hindernis dabei ist jedoch die Notwendigkeit für mehrere legitime Anwendungsfälle, die auf der seitenübergreifenden Informationsweitergabe basieren. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über Websites messen und Berichte erstellen möchten, sowie Websitebetreiber, die Benutzererfahrungen basierend auf der Gruppe, der sie angehören, oder ihren vorherigen Interaktionen mit der Website anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie soll die erforderlichen Datenbank-, Verarbeitungs- und Austauschanforderungen erfüllen, ohne dabei Benutzer verfolgen und profilieren zu können.

Wie bei anderen Speicher-APIs können Sie jederzeit in den Shared Storage schreiben. Sie können Shared Storage-Daten jedoch nur aus einem {{domxref("SharedStorageWorklet", "worklet", "", "nocode")}} lesen. Worklets bieten eine sichere Umgebung, in der Sie Shared Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, jedoch können Sie die Daten nicht direkt mit dem zugeordneten Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren, müssen Sie ein **Output Gate** verwenden. Diese Gates dienen spezifischen Zwecken, wie zum Beispiel der Auswahl einer URL aus einer bereitgestellten Liste, die dem Benutzer basierend auf Shared Storage-Daten angezeigt werden soll. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Output Gates

Die derzeit verfügbaren Output Gates für die Shared Storage API werden in den folgenden Abschnitten besprochen. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Wahrscheinlich werden in Zukunft weitere Output Gates hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL Selection** Output Gate, das über die Methode {{domxref("WindowSharedStorage.selectURL", "selectURL()")}} zugegriffen wird, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf Shared Storage-Daten angezeigt wird. Dieses Gate kann für folgende Zwecke verwendet werden:

- [**Kreativrotation**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/creative-rotation): Verwenden Sie gespeicherte Daten wie kreative IDs, Betrachtungszähler und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer auf verschiedenen Websites sehen. Dieser Ansatz hilft, Ansichten auszugleichen und übermäßige Exposition bestimmter Inhalte zu vermeiden, was wiederum helfen kann, eine negative Benutzererfahrung zu verhindern.
- [**A/B-Testen**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing): Weisen Sie einem Benutzer eine Experimentgruppe zu und speichern Sie die Gruppendetails im Shared Storage für den seitenübergreifenden Zugriff.
- [**Individuelle Benutzererfahrungen**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus eines Benutzers oder anderen Benutzerzuständen.

### Ausführen

Das **Run** Output Gate, das über die Methode {{domxref("WindowSharedStorage.run", "run()")}} zugegriffen wird, soll auf generische Weise verwendet werden, um einige Shared Storage-Daten zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Run Output Gate verwenden, um Shared Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Einzigartige Reichweite-Berichterstellung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft die Anzahl der einzigartigen Zuschauer ihres Inhalts kennen. Sie können Shared Storage verwenden, um die erste Anzeige eines Benutzers Ihrer Anzeige oder eingebetteten Veröffentlichung zu melden und doppelte Zählungen für denselben Benutzer auf einer anderen Website zu verhindern, wodurch Sie einen aggregierten rauschbehafteten Bericht über die ungefähre einzigartige Reichweite erhalten.
- [**Benutzerdemographie-Berichterstellung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die Demographie ihres Publikums verstehen. Sie können Shared Storage verwenden, um demographische Benutzerdaten auf Ihrer Hauptwebsite zu erfassen und mithilfe aggregierter Berichterstellung über diese in eingebetteten Kontexten auf anderen Websites zu berichten.
- [**K+ Frequenzmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" bezeichnet, bezieht sich K+ Frequenz auf die Mindestanzahl von Ansichten, die erforderlich sind, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (häufig im Kontext von Anzeigenansichten verwendet). Sie können Shared Storage verwenden, um Berichte über einzigartige Benutzer zu erstellen, die einen Inhalt mindestens K Mal gesehen haben.

## Verständnis, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API - das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Testen](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Benutzer einer Experimentgruppe zugeordnet und die Gruppendetails im Shared Storage gespeichert. Andere Websites können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach - Sie verwenden Methoden, die auf der {{domxref("SharedStorage")}}-Schnittstelle definiert sind, um Daten zu {{domxref("SharedStorage.set", "setzen", "", "nocode")}}, {{domxref("SharedStorage.append", "anhängen", "", "nocode")}}, oder {{domxref("SharedStorage.delete", "löschen", "", "nocode")}}/{{domxref("SharedStorage.clear", "löschen", "", "nocode")}}.

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Website oder App ausgeführt wird, auf {{domxref("WindowSharedStorage")}}. Dies ist verfügbar über `window.sharedStorage`.
- Im Kontext Ihres Shared Storage Worklets, auf {{domxref("WorkletSharedStorage")}}. Dies ist verfügbar über `this.sharedStorage`.

In unserem A/B-Testbeispiel definieren wir eine Funktion im App-Kontext, die eine Zufallszahl generiert - 0 oder 1 -, um eine Experimentgruppe darzustellen. Danach führen wir die {{domxref("SharedStorage.set", "window.sharedStorage.set()")}}-Funktion aus, um den Benutzer einer Gruppe zuzuordnen und das Ergebnis im Shared Storage zu speichern:

```js
// Weist einem Benutzer zufällig eine Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Weist den Benutzer einer zufälligen Gruppe (0 oder 1) zu und speichert ihn im Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

> [!NOTE]
> Die Option `ignoreIfPresent: true` bewirkt, dass die `set()`-Funktion abbricht, wenn der Shared Storage bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, müssen Sie, um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren, ein **Output Gate** verwenden. In diesem Beispiel verwenden wir das [URL Selection output gate](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann basierend auf deren Gruppe eine URL in einem fenced frame anzuzeigen.

Um das Output Gate zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, das die URL-Auswahl behandelt, und sie registrieren.
2. Das Modul zu Ihrem Shared Storage Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Nachfolgend werden diese Schritte einzeln betrachtet.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der in Shared Storage gespeicherten Experimentgruppe. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem {{domxref("SharedStorageWorklet")}}-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben, wodurch die Privatsphäre gewahrt wird.

Die URL Selection Operation ist eine JavaScript-Klasse, die die folgenden Regeln befolgen muss (diese Regeln variieren je nach Output Gate und deren beabsichtigtem Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter (wenn aufgerufen, ist das Datenargument optional) entgegennimmt.
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Output Gate hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und `run()`-Methode definiert. Für URL Selection siehe {{domxref("SharedStorageSelectURLOperation")}}.

Sobald die Operation definiert ist, muss sie mit {{domxref("SharedStorageWorkletGlobalScope.register()")}} registriert werden.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Lesen Sie die Experimentgruppe des Benutzers aus dem Shared Storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Rückgabe der Gruppennummer
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

Beachten Sie, wie der im Hauptanwendungskontext gesetzte Wert mit {{domxref("WorkletSharedStorage.get()")}} abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem Shared Storage nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; siehe {{domxref("SharedStorageOperation")}} für ein Beispiel.

#### Modul zum Shared Storage Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem Shared Storage Worklet mit {{domxref("Worklet.addModule", "window.sharedStorage.worklet.addModule()")}} hinzugefügt werden. In unserem Hauptanwendungskontext geschieht dies, bevor wir den Wert der Experimentgruppe setzen, sodass sie bei Bedarf einsatzbereit ist:

```js
async function injectContent() {
  // Fügen Sie das Modul zum Shared Storage Worklet hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie den Benutzer einer zufälligen Gruppe (0 oder 1) zu und speichern Sie ihn im Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

#### Wählen Sie eine URL aus und laden Sie sie in einem fenced frame

Um die im Worklet definierte Operation auszuführen, rufen wir {{domxref("WindowSharedStorage.selectURL()")}} auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu leaken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der entsprechenden Klassenstruktur für eine URL Selection Operation definiert wurde, wie oben besprochen.

`selectURL()` erwartet ein Array von Objekten mit auszuwählenden URLs, ein optionales Optionsobjekt und für die zugrunde liegende Operation, eine Ganzzahl zurückzugeben, die sie zur Auswahl einer URL verwenden kann.

```js
// Führen Sie die URL-Auswahloperation aus
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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem {{domxref("FencedFrameConfig")}}-Objekt aufgelöst. Dieses Objekt kann als Wert der {{domxref("HTMLFencedFrameElement.config")}}-Eigenschaft gesetzt werden, wodurch der Inhalt der ausgewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige App-Skript sieht folgendermaßen aus:

```js
// Weist einem Benutzer zufällig eine Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Fügen Sie das Modul zum Shared Storage Worklet hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie den Benutzer einer zufälligen Gruppe (0 oder 1) zu und speichern Sie ihn im Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Führen Sie die URL-Auswahloperation aus
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

  // Rendern Sie die gewählte URL in einem fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

## Unterschiede zwischen Shared Storage und Web Storage

Der Hauptunterschied besteht darin, dass Shared Storage für die Verwendung mit seitenübergreifenden Daten nach der Partitionierung des Speichers vorgesehen ist.

- Wenn Sie ein Publisher sind und Sie möchten, dass nur Sie auf First-Party-Daten zugreifen können, verwenden Sie die Version von [Web Storage](/de/docs/Web/API/Web_Storage_API) [`localStorage`](/de/docs/Web/API/Window/localStorage).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung persistent sind, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website agieren und Daten von dieser Website aufzeichnen möchten, um später auf einer anderen Website darauf zuzugreifen, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage ist, dass das Lesen aus dem Shared Storage geschützt ist (Schreiben funktioniert ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage Worklets stattfinden, und der Ursprung, der im Worklet zum Lesen verwendet wird, ist derselbe wie der Browsing-Kontext, der ihn erstellt hat.

Darüber hinaus können Sie Shared Storage-Daten nicht außerhalb eines Shared Storage Worklets extrahieren, als Schutzmaßnahme gegen Tracking. Sie müssen eines der Output Gates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Schließlich bleiben Daten in `localStorage`, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- {{domxref("SharedStorage")}}
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden zum Schreiben von Daten in den Shared Storage.
- {{domxref("WindowSharedStorage")}}
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er einem Standard-Browsing-Kontext freigegeben ist. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Output Gates, die als Proxy für die im Worklet definierten Operationen fungieren.
- {{domxref("WorkletSharedStorage")}}
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden zum Lesen der Shared Storage-Daten.
- {{domxref("SharedStorageWorklet")}}
  - : Repräsentiert das aktuelle originierte Shared Storage Worklet. Es enthält die Methode {{domxref("Worklet.addModule", "addModule()")}} zum Hinzufügen von Modulen. Anders als ein regulärer {{domxref("Worklet")}}, kann der `SharedStorageWorklet` aus Datenschutzgründen nur über ein einziges Modul verfügen.
- {{domxref("SharedStorageWorkletGlobalScope")}}
  - : Repräsentiert den globalen Umfang eines {{domxref("SharedStorageWorklet")}}-Moduls. Es enthält die Funktionalität zur {{domxref("SharedStorageWorkletGlobalScope.register", "Registrierung", "", "nocode")}} einer definierten Operation und {{domxref("SharedStorageWorkletGlobalScope.sharedStorage", "Zugriff auf den Shared Storage", "", "nocode")}}.

### Definitionen der Signaturen von Output Gate-Operationen

- {{domxref("SharedStorageOperation")}}
  - : Repräsentiert die Basisklasse für alle verschiedenen Typen von Output Gate Operationen.
- {{domxref("SharedStorageRunOperation")}}
  - : Repräsentiert eine Run Output Gate Operation.
- {{domxref("SharedStorageSelectURLOperation")}}
  - : Repräsentiert eine URL-Auswahlausgabe-Operation.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Window.sharedStorage")}}
  - : Gibt das {{domxref("WindowSharedStorage")}}-Objekt für den aktuellen Ursprung zurück.

## Enrollment und lokale Tests

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie sie im [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Andernfalls werden die Shared Storage API-Methoden nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal ohne Enrollment testen. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos sehen Sie sich die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/) an, die auch einige Beispiele für die Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
