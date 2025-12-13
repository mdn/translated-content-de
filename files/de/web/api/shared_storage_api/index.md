---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{DefaultAPISidebar("Shared Storage API")}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von einem Browseranbieter abgelehnt.
> Details finden Sie im Abschnitt [Standards-Positionen](#standards-positionen) unten.

Die **Shared Storage API** ist ein clientseitiger Speichermodus, der nicht partitionierten, plattformübergreifenden Datenzugriff ermöglicht und gleichzeitig die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Verwendung

Eine Hauptquelle für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheits-](/de/docs/Web/Security)probleme im Web ist die Verwendung von Cookies, die von eingebetteten Drittanbieterinhalten auf Websites gesetzt werden (z. B. über {{htmlelement("iframe")}} Elemente). Diese Cookies können genutzt werden, um Nutzer zu verfolgen und zu profilieren, und Informationen plattformübergreifend zu teilen.

Um plattformübergreifendes Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis dafür sind jedoch mehrere legitime Anwendungsfälle, die auf plattformübergreifendes Teilen von Informationen angewiesen sind. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen plattformübergreifend messen und Berichte erstellen möchten, und Websitebetreiber, die Nutzererlebnisse basierend auf der Benutzergruppe oder vorherigen Interaktionen anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die erforderlichen Datenspeicher-, Verarbeitungs- und Freigabefunktionen bereitzustellen, ohne die Möglichkeit, Benutzer zu verfolgen und zu profilieren.

Wie bei anderen Speicher-APIs können Sie jederzeit in den Shared Storage schreiben. Den Shared Storage lesen können Sie jedoch nur innerhalb eines [Worklet](/de/docs/Web/API/SharedStorageWorklet). Worklets bieten eine sichere Umgebung, in der Sie Shared Storage-Daten verarbeiten und nützliche Ergebnisse zurückgeben können, ohne die Daten direkt mit dem zugehörigen Browsing-Kontext teilen zu können.

Um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren, müssen Sie ein **Output Gate** verwenden. Diese Gates erfüllen bestimmte Zwecke wie das Auswählen einer URL aus einer bereitgestellten Liste, die dem Nutzer basierend auf den Shared Storage-Daten angezeigt werden soll. Die für den Nutzer bestimmten Ergebnisse werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Output Gates

Die aktuell verfügbaren Output Gates für die Shared Storage API werden in den folgenden Abschnitten erläutert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gate auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> In Zukunft werden voraussichtlich mehr Output Gates hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL Selection** Output Gate, zugänglich über die Methode [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL), wird verwendet, um aus einer bereitgestellten Liste eine URL auszuwählen, die dem Benutzer basierend auf den Shared Storage-Daten angezeigt werden soll. Dieses Gate kann für folgende Zwecke genutzt werden:

- [**Creative Rotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Ansichtsanzahlen und Nutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte Nutzern auf verschiedenen Seiten angezeigt werden. Dieser Ansatz hilft dabei, Ansichten auszugleichen und eine Überexposition bestimmter Inhalte zu vermeiden, was wiederum negative Nutzererfahrungen verhindern kann.
- [**A/B-Tests**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einem Nutzer eine Versuchsgruppe zu und speichern Sie dann Gruppendetails im Shared Storage für den plattformübergreifenden Zugriff.
- [**Benutzerdefinierte Nutzererlebnisse**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufrufe basierend auf dem Registrierungsstatus eines Nutzers oder anderen Nutzerzuständen.

### Ausführen

Das **Run** Output Gate, zugänglich über die Methode [`run()`](/de/docs/Web/API/WindowSharedStorage/run), soll auf generische Weise zur Verarbeitung einiger Shared Storage-Daten verwendet werden.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Run-Output Gate nutzen, um Shared Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in folgenden Anwendungsfällen verwendet werden:

- [**Unique Reach Reporting**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsersteller und Werbetreibende möchten häufig die Anzahl der eindeutigen Zuschauer ihrer Inhalte kennen. Sie können den Shared Storage verwenden, um den ersten Kontakt eines Nutzers mit Ihrer Anzeige oder eingbetteten Veröffentlichung zu melden und eine doppelte Zählung desselben Nutzers auf einer anderen Website zu verhindern, was Ihnen einen aggregierten ungenauen Bericht der ungefähren eindeutigen Reichweite gibt.
- [**Demographieberichte der Nutzer**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsersteller möchten oft die Demographie ihres Publikums verstehen. Sie können den Shared Storage verwenden, um demographische Daten der Nutzer auf Ihrer Hauptseite aufzuzeichnen und aggregierte Berichterstattung zu verwenden, um darüber auf anderen Websites in eingebetteten Kontexten zu berichten.
- [**K+ Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als „effektive Frequenz“ bezeichnet, bezieht sich K+ Frequenz auf die minimale Anzahl an Ansichten, die erforderlich sind, bevor ein Nutzer bestimmte Inhalte erkennt oder sich daran erinnert (häufig im Kontext von Anzeigenansichten verwendet). Sie können den Shared Storage verwenden, um Berichte über eindeutige Nutzer zu erstellen, die einen Inhalt mindestens K-mal gesehen haben.

## Verstehen, wie Shared Storage funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API – das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser Daten. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch ein einfaches [A/B-Test](https://privacysandbox.google.com/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Nutzer einer Versuchsgruppe zugeordnet, und die Gruppendetails werden im Shared Storage gespeichert. Andere Websites können diese Daten nutzen, um eine URL auszuwählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in Shared Storage

Das Schreiben von Daten in den Shared Storage ist einfach – Sie verwenden Methoden, die im [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Interface definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Hauptbrowsing-Kontext, in dem Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion im App-Kontext, die eine Zufallszahl – 0 oder 1 – generiert, um eine Versuchsgruppe darzustellen. Wir führen dann die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Nutzer einer Gruppe zuzuordnen und das Ergebnis im Shared Storage zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die Funktion `set()` abbricht, wenn der Shared Storage bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem Shared Storage

Wie oben erwähnt, müssen Sie ein **Output Gate** verwenden, um nützliche Ergebnisse aus einem Shared Storage-Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL Selection Output Gate](#url-auswahl), um die Versuchsgruppe des Nutzers zu lesen und dann eine URL in einem fenced frame basierend auf der Gruppe anzuzeigen.

Um das Output Gate zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, die das Auswählen der URL behandelt, und sie registrieren.
2. Das Modul zu Ihrem Shared Storage-Worklet hinzufügen.
3. Die URL mithilfe der Worklet-Operation auswählen und in einem fenced frame laden.

Im Folgenden betrachten wir diese Schritte nacheinander.

#### Eine Operation in einem Worklet-Modul definieren

Die URL-Auswahl basiert auf der Versuchsgruppe, die im Shared Storage gespeichert ist. Um diesen Wert abzurufen und basierend darauf eine URL auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt wird.

Die URL-Auswahloperation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren je nach Output Gate, abhängig von ihrem vorgesehenen Anwendungsfall):

- Die tatsächliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter (wenn aufgerufen, ist das Datenargument optional) entgegennimmt.
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der gewählten URL entspricht.

> [!NOTE]
> Jedes Output Gate hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und der `run()`-Methode definiert. Für URL-Auswahl, siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

Nachdem die Operation definiert ist, muss sie mithilfe von [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert werden.

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

Beachten Sie, wie der im Hauptanwendungskontext festgelegte Wert mithilfe von [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Zur Erinnerung: Um die Privatsphäre zu wahren und Datenlecks zu verhindern, können Sie Werte aus dem Shared Storage nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen in demselben Shared Storage-Workletmodulskript mit unterschiedlichen Namen zu definieren und zu registrieren. Siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum Shared Storage-Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem Shared Storage-Worklet mithilfe von [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Hauptanwendungskontext geschieht dies, bevor wir den Versuchsgruppenwert festlegen, damit er bei Bedarf bereit ist:

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

Zum Ausführen der im Worklet definierten Operation rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy für unsere Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten preiszugeben. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der geeigneten Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten, die URLs zur Auswahl enthalten, ein optionales Optionsobjekt, und die zugrunde liegende Operation muss eine Ganzzahl zurückgeben, die es zur Auswahl einer URL verwenden kann.

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

Da das Optionsobjekt `resolveToConfig: true` enthält, wird das zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, wodurch der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige Anwendungs-Skript sieht folgendermaßen aus:

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

Der Hauptunterschied besteht darin, dass der Shared Storage für die Verwendung mit plattformübergreifenden Daten nach der Aufteilung des Speichers gedacht ist.

- Wenn Sie ein Publisher sind und erstrangige Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version des [Web Storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Website agieren und Daten von dieser Website speichern möchten, um sie später auf einer anderen Website zu verwenden, verwenden Sie Shared Storage.

Ein weiterer wichtiger Unterschied zwischen Shared Storage und Web Storage ist, dass das Lesen aus dem Shared Storage geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Beim Shared Storage kann das Lesen jedoch nur innerhalb eines Shared Storage-Worklets erfolgen, und der Ursprung, der zum Lesen im Worklet verwendet wird, ist derselbe wie der Browsing-Kontext, der es erstellt hat.

Außerdem können Sie Shared Storage-Daten nicht außerhalb eines Shared Storage-Worklets extrahieren, als Schutz vor Tracking. Sie müssen eines der Output Gates verwenden, um mit Ihren Daten im Shared Storage zu arbeiten.

Zuletzt bleiben Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Shared Storage-Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung. Es definiert Methoden, um Daten in den Shared Storage zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung, wie er im normalen Browsing-Kontext angezeigt wird. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Output Gates, die als Proxies für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den geteilten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontextes. Unter anderem definiert es Methoden zum Lesen der Shared Storage-Daten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das Worklet des Shared Storage des aktuellen Ursprungs. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Anders als ein reguläres [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einziges Modul enthalten.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Gültigkeitsbereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität zur [Registrierung](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und zum [Zugriff auf den Shared Storage](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Definitionssignaturen von Output Gate Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Arten von Output Gate Operationen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run Output Gate Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL Selection Output Gate Operation.

### Erweiterungen anderer Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API in Ihren Websites zu verwenden, müssen Sie sie im [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Andernfalls funktionieren die Methoden der Shared Storage API nicht erfolgreich.

Sie können Ihren Shared Storage API-Code lokal ohne Anmeldung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Beispiele der Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Ein Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/646)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
