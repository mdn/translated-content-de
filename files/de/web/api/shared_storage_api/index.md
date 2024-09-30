---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der nicht partitionierten, seitenübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d. h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Verwendung

Eine wesentliche Quelle für [Privatsphäre](/de/docs/Web/Privacy)- und [Sicherheits](/de/docs/Web/Security)-Probleme im Web ist die Verwendung von Cookies, die auf Drittanbieterinhalten gesetzt werden, die in Websites eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können genutzt werden, um Benutzer zu verfolgen und zu profilieren und Informationen über Websites hinweg zu teilen.

Um seitenübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Arten von Speicher zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und die [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis ist jedoch der Bedarf an mehreren legitimen Anwendungsfällen, die auf seitenübergreifender Informationsweitergabe basieren. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über Websites hinweg messen und Berichte erstellen wollen, sowie Website-Betreiber, die Benutzererfahrungen basierend auf der Gruppe, in der sie sich befinden oder deren vorherigen Interaktionen, anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Ziel ist es, die erforderlichen Speicher-, Verarbeitungs- und Freigabefunktionen ohne die Möglichkeit zum Verfolgen und Profilieren von Benutzern bereitzustellen.

Wie bei anderen Speicher-APIs können Sie zu jedem Zeitpunkt Daten im Shared Storage speichern. Sie können jedoch nur im Inneren eines [Worklet](/de/docs/Web/API/SharedStorageWorklet) Daten aus dem Shared Storage lesen. Worklets bieten eine sichere Umgebung, in der Sie Daten aus dem Shared Storage verarbeiten und nützliche Ergebnisse zurückgeben können, die Daten jedoch nicht direkt mit dem zugehörigen Browsing-Kontext teilen können.

Um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren, müssen Sie ein **Ausgangstor** verwenden. Diese Tore dienen bestimmten Zwecken wie der Auswahl einer URL aus einer bereitgestellten Liste, die dem Benutzer basierend auf den Shared Storage-Daten angezeigt wird. Für den Benutzer bestimmte Ergebnisse werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) gezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Ausgangstore

Die derzeit für die Shared Storage API verfügbaren Ausgangstore werden in den nachfolgenden Abschnitten besprochen. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Tor auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Es wird wahrscheinlich in der Zukunft mehr Ausgangstore geben, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Ausgangstor, zugänglich über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL), wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer basierend auf den Shared Storage-Daten angezeigt wird. Dieses Tor kann für folgende Zwecke genutzt werden:

- [**Creative Rotation**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Ansichtenanzahl und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Benutzer über verschiedene Websites hinweg sehen. Dieser Ansatz hilft dabei, Ansichten auszugleichen und verhindert eine Überexponierung bestimmter Inhalte, was wiederum eine negative Benutzererfahrung vermeiden kann.
- [**A/B-Testing**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing): Weisen Sie einem Benutzer eine Experimentgruppe zu und speichern Sie die Gruppendetails im Shared Storage für den seitenübergreifenden Zugriff.
- [**Benutzerdefinierte Erfahrungen**](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus oder anderen Benutzerzuständen.

### Ausführen

Das **Ausführen**-Ausgangstor, zugänglich über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run), soll auf generische Weise verwendet werden, um einige Shared Storage-Daten zu verarbeiten.

Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann das Ausführen-Ausgangstor verwenden, um Shared Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in den folgenden Anwendungsfällen verwendet werden:

- [**Eindeutige Reichweitenberichterstattung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft die Anzahl der eindeutigen Zuschauer ihrer Inhalte kennen. Sie können den Shared Storage nutzen, um den ersten Aufruf Ihrer Anzeige oder eingebetteten Publikation zu melden und verhindern, die Zählung desselben Nutzers auf einer anderen Seite zu duplizieren, sodass Sie einen aggregierten ungenauen Bericht der ungefähren eindeutigen Reichweite erhalten.
- [**Demografische Benutzerberichterstattung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die Demografie ihres Publikums verstehen. Sie können Shared Storage verwenden, um demografische Benutzerdaten auf Ihrer Hauptseite zu erfassen und aggregierte Berichterstellung verwenden, um darüber auf anderen Sites in eingebetteten Kontexten zu berichten.
- [**K+ Häufigkeitsmessung**](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach): Wird manchmal als "effektive Frequenz" beschrieben. K+ Häufigkeit bezieht sich auf die Mindestanzahl von Ansichten, die benötigt wird, bevor ein Nutzer einen bestimmten Inhalt wieder erkennt oder sich daran erinnert (oft im Kontext von Anzeigenansichten verwendet). Sie können Shared Storage verwenden, um Berichte von eindeutigen Nutzern zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verständnis der Funktion von Shared Storage

Es gibt zwei Teile bei der Nutzung der Shared Storage API – das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser. Damit Sie eine Vorstellung davon haben, wie diese Teile behandelt werden, werden wir Sie durch das grundlegende [A/B-Testing](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage/ab-testing)-Beispiel von developer.chrome.com führen. In diesem Beispiel wird einem Benutzer eine Experimentgruppe zugewiesen, und die Gruppendetails werden im Shared Storage gespeichert. Andere Sites können diese Daten verwenden, wenn sie eine URL in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) auswählen.

### Schreiben in Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach – Sie verwenden Methoden, die auf dem [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Interface definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder [zu löschen](/de/docs/Web/API/SharedStorage/delete)/[zu leeren](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, wo Ihre Site oder Anwendung läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testing Beispiel definieren wir eine Funktion in unserem App-Kontext, die eine zufällige Zahl generiert — 0 oder 1 — um eine Experimentgruppe zu repräsentieren. Wir führen dann die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Benutzer einer Gruppe zuzuordnen und das Ergebnis im Shared Storage zu speichern:

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

### Lesen und Verarbeiten von Daten aus Shared Storage

Wie oben erwähnt, benötigen Sie ein **Ausgangstor**, um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl Ausgangstor](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL in einem fenced frame basierend auf ihrer Gruppe anzuzeigen.

Um das Ausgangstor zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die Auswahl der URL zu handhaben, und es registrieren.
2. Das Modul Ihrem Shared Storage Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Im Folgenden betrachten wir diese Schritte einzeln.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der Experimentgruppe, die im Shared Storage gespeichert ist. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten aus anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt bleibt.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren je nach Ausgangstor, abhängig von ihrem beabsichtigten Verwendungszweck):

- Die tatsächliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter (wenn aufgerufen, ist der Datenparameter optional) erhält.
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der ausgewählten URL entspricht.

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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um die Privatsphäre zu wahren und Datenlecks zu verhindern, können Sie Werte aus dem Shared Storage nur innerhalb eines Worklet lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren; sehen Sie [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Modul zum Shared Storage Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem Shared Storage Worklet mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Haupt-App-Kontext wird dies ausgeführt, bevor wir den Wert der Experimentgruppe setzen, damit er bereit ist, wenn nötig:

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

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu leaken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der entsprechenden Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben besprochen.

`selectURL()` erwartet ein Array von Objekten, die URLs enthalten, aus denen gewählt werden soll, ein optionales Optionsobjekt, und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, die zum Auswählen einer URL verwendet werden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, wodurch der Inhalt der ausgewählten URL in dem entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

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

Der Hauptunterschied besteht darin, dass Shared Storage für die Verwendung mit seitenübergreifenden Daten nach der Partitionierung des Speichers vorgesehen ist.

- Wenn Sie ein Publisher sind und Erstanbieter-Daten speichern möchten, die nur Ihnen zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Dritter auf einer anderen Site tätig sind und Daten von dieser Site aufzeichnen möchten, um später auf einer anderen Site darauf zuzugreifen, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage besteht darin, dass das Lesen aus dem Shared Storage bewacht wird (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Mit Shared Storage kann das Lesen nur innerhalb eines Shared Storage Worklets erfolgen, und der Ursprung, der zum Lesen im Worklet verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Zusätzlich können Sie Shared Storage-Daten außerhalb eines Shared Storage Worklets nicht extrahieren, um Tracking zu verhindern. Sie müssen eines der Ausgangstore verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Zuletzt: Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibvorgang gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung. Es definiert Methoden, um Daten in den Shared Storage zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung, wie er einem Standard-Browsing-Kontext zugänglich ist. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Ausgangstore, die als Proxies für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den Shared Storage für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden, um die Shared Storage-Daten zu lesen.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das aktuelle Ursprung's Shared Storage Worklet. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einziges Modul hinzugefügt haben.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Umfang eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und zum [Zugreifen auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen der Ausgangstor-Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle unterschiedlichen Typen von Ausgangstor-Operationen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Ausführen-Ausgangstor-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgangstor-Operation.

### Erweiterungen anderer Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihren Sites zu verwenden, müssen Sie sie im [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demo-Website](https://shared-storage-demo.web.app/), die auch einige Private Aggregation API-Beispiele enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
