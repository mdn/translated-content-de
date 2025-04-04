---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der unpartitionierten, plattformübergreifenden Datenzugriff ermöglicht und gleichzeitig die Privatsphäre wahrt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Verwendung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web ist die Verwendung von Cookies, die auf Drittanbieter-Inhalten gesetzt werden, die in Webseiten eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Benutzer zu verfolgen, zu profilieren und Informationen über Webseiten hinweg zu teilen.

Um die plattformübergreifende Nachverfolgung zu verhindern, arbeiten Browser daran, alle Speicherarten zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache-API](/de/docs/Web/API/Cache). Ein wesentliches Hindernis hierbei ist jedoch die Notwendigkeit für mehrere legitime Anwendungsfälle, die auf der plattformübergreifenden Informationsfreigabe beruhen. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen plattformübergreifend messen und Berichte erstellen möchten, sowie Webseitenbetreiber, die die Benutzererfahrung basierend auf der Gruppenzugehörigkeit oder vorherigen Interaktionen mit der Webseite anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie soll die erforderlichen Daten-Speicher-, Verarbeitungs- und Freigabefähigkeiten ohne die Möglichkeit zur Nachverfolgung und Profilerstellung der Benutzer bereitstellen.

Wie bei anderen Speicher-APIs kann jederzeit auf den gemeinsamen Speicher geschrieben werden. Allerdings kann auf Daten aus dem gemeinsamen Speicher nur in einem [Worklet](/de/docs/Web/API/SharedStorageWorklet) zugegriffen werden. Worklets bieten eine sichere Umgebung, in der gemeinsam genutzte Speicherdaten verarbeitet und nützliche Ergebnisse zurückgegeben werden können, ohne dass die Daten direkt mit dem zugehörigen Browsing-Kontext geteilt werden können.

Um nützliche Ergebnisse aus einem Worklet des gemeinsam genutzten Speichers zu extrahieren, muss ein **Ausgangstor** verwendet werden. Diese Tore dienen bestimmten Zwecken, wie dem Auswählen einer URL aus einer bereitgestellten Liste, um sie dem Benutzer auf Basis der gemeinsam genutzten Speicherdaten anzuzeigen. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie nicht von der einbettenden Seite aus zugänglich sind.

## Ausgangstore

Die derzeit verfügbaren Ausgangstore für die Shared Storage API werden in den folgenden Abschnitten besprochen. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Tor auf und stellen Links zu Leitfäden mit weiteren Informationen und Codebeispielen bereit.

> [!NOTE]
> In Zukunft werden wahrscheinlich weitere Ausgangstore hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl** Ausgangstor, das über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode aufgerufen wird, wird verwendet, um basierend auf gemeinsam genutzten Speicherdaten eine URL aus einer bereitgestellten Liste auszuwählen und dem Benutzer anzuzeigen. Dieses Tor kann für folgende Zwecke genutzt werden:

- [**Creative Rotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Creative-IDs, Ansichtsanzahlen und Benutzerinteraktionen, um zu bestimmen, welchen Creative-Content Benutzer über verschiedene Websites hinweg sehen. Dieser Ansatz hilft, Ansichten auszugleichen und eine übermäßige Exposition bestimmter Inhalte zu vermeiden, was wiederum dazu beitragen kann, eine negative Benutzererfahrung zu vermeiden.
- [**A/B-Tests**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einem Benutzer eine Experimentgruppe zu und speichern Sie die Gruppendetails im gemeinsamen Speicher für den plattformübergreifenden Zugriff.
- [**Benutzerdefinierte Erlebnisse**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsaufforderungen basierend auf dem Registrierungsstatus eines Benutzers oder anderen Benutzerzuständen.

### Ausführen

Das **Ausführen** Ausgangstor, das über die [`run()`](/de/docs/Web/API/WindowSharedStorage/run)-Methode aufgerufen wird, soll auf generische Weise verwendet werden, um einige gemeinsam genutzte Speicherdaten zu verarbeiten.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Ausführen-Ausgangstor verwenden, um gemeinsam genutzte Speicherdaten zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können in folgenden Anwendungsfällen verwendet werden:

- [**Unique Reach Reporting**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsersteller und Werbetreibende möchten oft die Anzahl der eindeutigen Betrachter ihres Inhalts kennen. Sie können gemeinsam genutzten Speicher verwenden, um das erste Mal zu melden, wenn ein Benutzer Ihre Anzeige oder eingebettete Veröffentlichung sieht, und eine doppelte Zählung desselben Benutzers auf einer anderen Website zu verhindern. Das ergibt einen aggregierten, verrauschten Bericht über die ungefähre eindeutige Reichweite.
- [**Berichte zur demografischen Zielgruppe**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsanbieter möchten oft die Demografie ihres Publikums verstehen. Sie können gemeinsam genutzten Speicher verwenden, um demografische Daten des Benutzers auf Ihrer Hauptwebsite zu erfassen und diese über andere Websites in eingebetteten Kontexten hinweg zu berichten.
- [**K+ Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" bezeichnet, bezieht sich die K+ Frequenz auf die Mindestanzahl von Ansichten, die benötigt werden, bevor ein Benutzer bestimmten Inhalt erkennt oder wiedererkennt (häufig im Kontext von Anzeigenansichten verwendet). Sie können gemeinsam genutzten Speicher verwenden, um Berichte über eindeutige Benutzer zu erstellen, die einen Inhalt mindestens K-mal gesehen haben.

## Verständnis, wie gemeinsam genutzter Speicher funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API — das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Test](https://privacysandbox.google.com/private-advertising/select-url/ab-testing) Beispiel von developer.chrome.com. In diesem Beispiel wird einem Benutzer eine Experimentgruppe zugewiesen und die Gruppendetails im gemeinsamen Speicher gespeichert. Andere Websites können diese Daten verwenden, um eine URL auszuwählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den gemeinsamen Speicher

Das Schreiben von Daten in den gemeinsamen Speicher ist einfach — Sie verwenden Methoden, die auf der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[leeren](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Website oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres gemeinsam genutzten Speicher-Worklets, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Testbeispiel definieren wir eine Funktion in unserem App-Kontext, die eine Zufallszahl erzeugt — 0 oder 1 — um eine Experimentgruppe darzustellen. Wir führen dann die Funktion [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set) aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im gemeinsamen Speicher zu speichern:

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
> Die Option `ignoreIfPresent: true` bewirkt, dass die `set()`-Funktion abbricht, wenn der gemeinsame Speicher bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem gemeinsamen Speicher

Wie oben erwähnt, ist zur Extraktion nützlicher Ergebnisse aus einem Worklet des gemeinsam genutzten Speichers ein **Ausgangstor** erforderlich. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgangstor](#url-auswahl), um die Experimentgruppe des Benutzers zu lesen und dann eine URL in einem fenced frame basierend auf ihrer Gruppe anzuzeigen.

Um das Ausgangstor zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die Auswahl der URL zu handhaben, und sie registrieren.
2. Das Modul Ihrem gemeinsam genutzten Speicher-Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und sie in einem fenced frame laden.

Nachfolgend betrachten wir diese Schritte einzeln.

#### Eine Operation in einem Worklet-Modul definieren

Die URL-Auswahl basiert auf der im gemeinsamen Speicher gespeicherten Experimentgruppe. Um diesen Wert zu erhalten und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre wahren.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die nach folgenden Regeln aufgebaut sein muss (diese Regeln variieren je nach Ausgangstor abhängig vom beabsichtigten Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter annimmt (der Datenparameter ist optional).
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

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert über [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Um es zu wiederholen: Um die Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem gemeinsam genutzten Speicher nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Worklet-Modulskript des gemeinsam genutzten Speichers mit unterschiedlichen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum gemeinsam genutzten Speicher-Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem gemeinsam genutzten Speicher-Worklet hinzugefügt werden, indem [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) verwendet wird. In unserem Haupt-App-Kontext geschieht dies, bevor wir den Experimentgruppenwert setzen, sodass er bei Bedarf einsatzbereit ist:

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

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy zu unserer Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu verlieren. `selectURL()` ist die korrekte Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, da sie mit der entsprechenden Klassenstruktur für eine URL-Auswahloperation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten mit auszuwählenden URLs, ein optionales Optionen-Objekt und dass die zugrunde liegende Operation eine Ganzzahl zurückgibt, die zur Auswahl einer URL verwendet werden kann.

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

Da das Optionen-Objekt `resolveToConfig: true` enthält, wird die zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, was dazu führt, dass der Inhalt der gewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

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

## Unterschiede zwischen gemeinsam genutztem Speicher und Webspeicher

Der Hauptunterschied besteht darin, dass gemeinsam genutzter Speicher für die Verwendung mit plattformübergreifenden Daten vorgesehen ist, nachdem der Speicher partitioniert wurde.

- Wenn Sie ein Publisher sind und Erstanbieterdaten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version des [Webspeichers](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Dritter auf einer anderen Website arbeiten und Daten von dieser Website aufzeichnen möchten, um später auf einer anderen Website darauf zuzugreifen, verwenden Sie den gemeinsam genutzten Speicher.

Ein weiterer wichtiger Unterschied zwischen gemeinsam genutztem Speicher und Webspeicher ist, dass das Lesen aus dem gemeinsam genutzten Speicher geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Mit `localStorage` und `sessionStorage` können Sie frei lesen. Beim gemeinsam genutzten Speicher kann das Lesen nur innerhalb eines Worklets für gemeinsam genutzten Speicher erfolgen, und der Ursprung, der im Worklet zum Lesen verwendet wird, ist derselbe wie der Browsing-Kontext, der ihn erstellt hat.

Darüber hinaus können Sie Daten aus dem gemeinsam genutzten Speicher nicht außerhalb eines Worklets für gemeinsam genutzten Speicher extrahieren, als eine Schutzmaßnahme gegen Nachverfolgung. Sie müssen eines der Ausgangstore verwenden, um mit Ihren Daten im gemeinsam genutzten Speicher zu arbeiten.

Schließlich bestehen Daten in `localStorage` so lange, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während Daten im gemeinsam genutzten Speicher 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Representiert den gemeinsam genutzten Speicher für einen bestimmten Ursprung. Sie definiert Methoden, um Daten in den gemeinsam genutzten Speicher zu schreiben.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Stellt den gemeinsam genutzten Speicher für einen bestimmten Ursprung dar, wie er einem Standard-Browsing-Kontext zur Verfügung gestellt wird. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Ausgangstore, die als Proxys für die im Worklet definierten Operationen fungieren.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Representiert den gemeinsam genutzten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts. Unter anderem definiert es Methoden zum Lesen der gemeinsam genutzten Speicherdaten.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das Worklet des gemeinsam genutzten Speichers des aktuellen Ursprungs. Es enthält die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode zum Hinzufügen von Modulen. Anders als ein reguläres [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul hinzugefügt bekommen.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionen zum [Registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) einer definierten Operation und [Zugriff auf den gemeinsam genutzten Speicher](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen von Ausgangstor-Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Representiert die Basisklasse für alle verschiedenen Ausgangstor-Operationstypen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Representiert eine Run-Ausgangstor-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Representiert eine URL-Auswahl-Ausgangstor-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Aufnahme und lokales Testen

Um die Shared Storage API auf Ihren Websites zu verwenden, müssen Sie diese im [Datenschutz-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Wenn Sie dies nicht tun, werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared-Storage-API-Code lokal testen, ohne sich einzuschreiben. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für ausführliche Demos siehe die [Shared Storage API Demo-Website](https://shared-storage-demo.web.app/), die auch einige Beispiele für die Private Aggregation API enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
