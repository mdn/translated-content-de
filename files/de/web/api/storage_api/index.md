---
title: Storage API
slug: Web/API/Storage_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{securecontext_header}}{{DefaultAPISidebar("Storage")}} {{AvailableInWorkers}}

Der [Storage-Standard](https://storage.spec.whatwg.org/) definiert ein gemeinsames Speichersystem, das für alle APIs und Technologien verwendet werden kann, mit denen Websites Daten im Browser eines Benutzers speichern können.

Die für eine Website gespeicherten Daten, die vom Storage-Standard verwaltet werden, umfassen üblicherweise [IndexedDB-Datenbanken](/de/docs/Web/API/IndexedDB_API) und [Cache-API-Daten](/de/docs/Web/API/Cache), können jedoch auch andere arten von websitezugänglichen Daten beinhalten, wie z. B. [Web Storage API-Daten](/de/docs/Web/API/Web_Storage_API).

Die Storage-API ermöglicht es Websites, herauszufinden, wie viel Speicherplatz sie nutzen können, wie viel sie bereits nutzen, und sogar zu kontrollieren, ob sie benachrichtigt werden müssen, bevor der [Benutzeragent](/de/docs/Glossary/user_agent) Daten löscht, um Platz für andere Dinge zu schaffen.

Dieser Artikel gibt einen Überblick darüber, wie Benutzeragenten die Daten von Websites speichern und verwalten. Weitere Informationen über Speicherlimits und das Löschen von Daten finden Sie unter [Browser-Speicherquoten und Kriterien für das Löschen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Dieser Artikel gibt auch einen Überblick über das [`StorageManager`](/de/docs/Web/API/StorageManager) Interface, das zur Schätzung des verfügbaren Speichers für eine Website verwendet wird.

## Konzepte und Verwendung

### Storage Buckets

Das vom Storage-Standard beschriebene Speichersystem, in dem Website-Daten gespeichert werden, besteht üblicherweise aus einem einzigen _Bucket_ für jeden [Origin](/de/docs/Glossary/origin).

Im Wesentlichen hat jede Website ihren eigenen Speicherplatz, in den ihre Daten abgelegt werden. In einigen Fällen können Benutzeragenten jedoch entscheiden, die Daten eines einzelnen Origins in mehreren verschiedenen Buckets zu speichern, beispielsweise wenn dieser Origin in verschiedene Drittanbieter-Origins eingebettet ist.

Weitere Informationen finden Sie unter [Wie trennen Browser Daten von verschiedenen Websites?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_do_browsers_separate_data_from_different_websites)

### Bucket-Modi

Jeder Website-Speicher-Bucket hat einen _Modus_, der die Datenaufbewahrungsrichtlinie für diesen Bucket beschreibt. Es gibt zwei Modi:

- `"best-effort"`
  - : Der Benutzeragent wird versuchen, die im Bucket enthaltenen Daten so lange wie möglich zu behalten, _wird die Benutzer jedoch nicht warnen_, wenn der Speicherplatz knapp wird und es notwendig wird, den Bucket zu leeren, um den Speicherdruck zu verringern.
- `"persistent"`
  - : Der Benutzeragent wird die Daten so lange wie möglich behalten und alle `"best-effort"` Buckets leeren, bevor er in Betracht zieht, einen als `"persistent"` markierten Bucket zu leeren. Wenn es notwendig wird, das Leeren von persistenten Buckets in Betracht zu ziehen, wird der Benutzeragent den Benutzer benachrichtigen und eine Möglichkeit bieten, einen oder mehrere persistente Buckets nach Bedarf zu leeren.

Sie können den Speicher-Bucket-Modus eines Origins ändern, indem Sie die Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) verwenden, die die `"persistent-storage"` [Benutzerberechtigung](/de/docs/Web/API/Permissions_API) erfordert.

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

Sie können auch die Methode [`navigator.storage.persisted()`](/de/docs/Web/API/StorageManager/persisted) verwenden, um zu erfahren, ob der Speicher eines Origins persistent ist oder nicht:

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

Weitere Informationen finden Sie unter [Bleiben im Browser gespeicherte Daten erhalten?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).

### Quoten und Nutzungsabschätzungen

Der Benutzeragent bestimmt mit beliebigen Mitteln den maximalen Speicherplatz, den eine bestimmte Website nutzen kann. Dieses Maximum ist die **Quote** des Origins. Der Teil dieses Speicherplatzes, der von der Website genutzt wird, wird als **Nutzung** bezeichnet. Beide Werte sind Schätzungen; es gibt mehrere Gründe, warum sie nicht präzise sind:

- Benutzeragenten werden ermutigt, die genaue Größe der von einem bestimmten Origin verwendeten Daten zu verschleiern, um zu verhindern, dass diese Werte für [Gerätespezifische Erkennung (Fingerprinting)](/de/docs/Glossary/Fingerprinting) Zwecke verwendet werden.
- Methoden zur Deduplizierung, Kompression und Reduzierung der physischen Größe der gespeicherten Daten können verwendet werden.
- Quoten sind konservative Schätzungen des Speicherplatzes, der für die Nutzung des Origins verfügbar ist, und sollten weniger als der verfügbare Speicherplatz auf dem Gerät sein, um Überlaufen zu verhindern.

Um die geschätzten Quoten und Nutzungswerte für einen bestimmten Origin zu bestimmen, verwenden Sie die Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate), die ein Promise zurückgibt, das bei Erfüllung ein Objekt erhält, das diese Zahlen enthält. Zum Beispiel:

```js
navigator.storage.estimate().then((estimate) => {
  // estimate.quota is the estimated quota
  // estimate.usage is the estimated number of bytes used
});
```

Weitere Informationen darüber, wie viele Daten ein Origin speichern kann, finden Sie unter [Wie viele Daten können gespeichert werden?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).

### Datenlöschung

Datenlöschung ist der Prozess, bei dem ein Benutzeragent die gespeicherten Daten eines Origins löscht. Dies kann beispielsweise geschehen, wenn das zum Speichern der Daten verwendete Gerät wenig Speicherplatz zur Verfügung hat.

Beim Löschen der Daten, die von einem Origin gespeichert werden, wird der Bucket des Origins als eine Einheit behandelt. Alle von diesem Origin gespeicherten Daten werden gelöscht.

Wenn ein Bucket als `"persistent"` markiert ist, werden die Inhalte nicht ohne weiteres vom Benutzeragenten gelöscht, es sei denn, der Origin der Daten selbst oder der Benutzer tut dies ausdrücklich. Dies umfasst Szenarien wie die Auswahl der Option "Caches leeren" oder "Letzte Historie löschen" durch den Benutzer. Der Benutzer wird ausdrücklich um Erlaubnis gebeten, um persistente Website-Speicher-Buckets zu entfernen.

Weitere Informationen finden Sie unter [Wann werden Daten gelöscht?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#when_is_data_evicted).

## Schnittstellen

- [`StorageManager`](/de/docs/Web/API/StorageManager)
  - : Bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}}
  - : Gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers auf einer Website- oder App-Basis verwendet wird.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}}
  - : Gibt eine [`StorageManager`](/de/docs/Web/API/StorageManager) Schnittstelle für die Verwaltung von Persistenzberechtigungen und die Schätzung des verfügbaren Speichers zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Speicher für das Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Permanenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web-Speicher- und Quoten-Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
