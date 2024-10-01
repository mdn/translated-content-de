---
title: Storage API
slug: Web/API/Storage_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{securecontext_header}}{{DefaultAPISidebar("Storage")}} {{AvailableInWorkers}}

Der [Storage Standard](https://storage.spec.whatwg.org/) definiert ein gemeinsames Speichersystem, das für alle APIs und Technologien entwickelt wurde, die Websites verwenden können, um Daten im Browser eines Benutzers zu speichern.

Die Daten, die für eine Website gespeichert werden und durch den Storage Standard verwaltet werden, umfassen in der Regel [IndexedDB-Datenbanken](/de/docs/Web/API/IndexedDB_API) und [Cache-API-Daten](/de/docs/Web/API/Cache), können aber auch andere site-zugängliche Daten enthalten, wie etwa [Web Storage API-Daten](/de/docs/Web/API/Web_Storage_API).

Die Storage API ermöglicht es Websites, herauszufinden, wie viel Platz sie nutzen können, wie viel sie bereits nutzen, und sogar zu kontrollieren, ob sie benachrichtigt werden müssen, bevor der {{Glossary("user_agent", "User Agent")}} Daten entfernt, um Platz für andere Dinge zu schaffen.

Dieser Artikel gibt einen Überblick darüber, wie User Agents die Daten von Websites speichern und verwalten. Für weitere Informationen zu Speichergrenzen und Datenlöschung, siehe [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Dieser Artikel bietet auch einen Überblick über das [`StorageManager`](/de/docs/Web/API/StorageManager)-Interface, das zur Schätzung des verfügbaren Speichers für eine Site verwendet wird.

## Konzepte und Nutzung

### Speicherbuckets

Das Speichersystem, das durch den Storage Standard beschrieben wird, in dem Websitedaten gespeichert werden, besteht in der Regel aus einem einzigen _Bucket_ für jeden {{Glossary("origin", "Ursprung")}}.

Im Wesentlichen hat jede Website ihren eigenen Speicherplatz, in den ihre Daten gelegt werden. In einigen Fällen können Benutzeragenten jedoch entscheiden, die Daten eines einzelnen Ursprungs in mehreren verschiedenen Buckets zu speichern, zum Beispiel wenn dieser Ursprung in verschiedenen Drittanbieter-Ursprüngen eingebettet ist.

Um mehr zu erfahren, siehe [Wie trennen Browser Daten von verschiedenen Websites?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_do_browsers_separate_data_from_different_websites)

### Bucket-Modi

Jeder Site-Speicherbucket hat einen _Modus_, der die Datenaufbewahrungsrichtlinie für diesen Bucket beschreibt. Es gibt zwei Modi:

- `"best-effort"`
  - : Der Benutzeragent wird versuchen, die im Bucket enthaltenen Daten so lange wie möglich beizubehalten, _wird die Benutzer jedoch nicht warnen_, wenn der Speicher knapp wird und es notwendig wird, den Bucket zu leeren, um den Speicherplatzdruck zu verringern.
- `"persistent"`
  - : Der Benutzeragent wird die Daten so lange wie möglich aufbewahren und alle `"best-effort"`-Buckets leeren, bevor er in Betracht zieht, einen als `"persistent"` markierten Bucket zu leeren. Sollte es notwendig werden, persistente Buckets zu löschen, wird der Benutzeragent den Benutzer benachrichtigen und eine Möglichkeit bieten, einen oder mehrere persistente Buckets nach Bedarf zu löschen.

Sie können den Speicherbucket-Modus eines Ursprungs ändern, indem Sie die Methode [`navigator.storage.persist()`](/de/docs/Web/API/StorageManager/persist) verwenden, die die `"persistent-storage"` [Nutzerberechtigung](/de/docs/Web/API/Permissions_API) erfordert.

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

Sie können auch die Methode [`navigator.storage.persisted()`](/de/docs/Web/API/StorageManager/persisted) verwenden, um zu erfahren, ob der Speicher eines Ursprungs persistent ist oder nicht:

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

Um mehr zu erfahren, siehe [Bleiben im Browser gespeicherte Daten bestehen?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).

### Quoten und Nutzungsabschätzungen

Der Benutzeragent bestimmt, mithilfe eines beliebigen Mechanismus, den er wählt, die maximale Menge an Speicher, die eine bestimmte Website verwenden kann. Dieses Maximum ist die **Quote** des Ursprungs. Die Menge dieses Platzes, die von der Website genutzt wird, wird als **Nutzung** bezeichnet. Beide Werte sind Schätzungen; es gibt mehrere Gründe, warum sie nicht genau sind:

- Benutzeragenten werden ermutigt, die genaue Größe der von einem bestimmten Ursprung verwendeten Daten zu verschleiern, um zu verhindern, dass diese Werte für {{Glossary("Fingerprinting", "Fingerprinting")}}-Zwecke verwendet werden.
- Methoden wie Deduplizierung, Kompression und andere, die physische Größe der gespeicherten Daten zu reduzieren, können verwendet werden.
- Quoten sind konservative Schätzungen des Platzes, der dem Ursprung zur Verfügung steht, und sollten geringer sein als der verfügbare Platz auf dem Gerät, um Überlastungen zu verhindern.

Um die geschätzten Quoten- und Nutzungswerte für einen bestimmten Ursprung zu bestimmen, verwenden Sie die Methode [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate), die ein Promise zurückgibt, das, wenn es aufgelöst wird, ein Objekt erhält, das diese Zahlen enthält. Zum Beispiel:

```js
navigator.storage.estimate().then((estimate) => {
  // estimate.quota is the estimated quota
  // estimate.usage is the estimated number of bytes used
});
```

Für weitere Informationen darüber, wie viel Daten ein Ursprung speichern kann, siehe [Wie viele Daten können gespeichert werden?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).

### Datenlöschung

Datenlöschung ist der Prozess, durch den ein Benutzeragent die gespeicherten Daten eines Ursprungs löscht. Dies kann beispielsweise passieren, wenn das Gerät, das die Daten speichert, wenig Speicherplatz hat.

Beim Löschen der von einem Ursprung gespeicherten Daten wird der Bucket des Ursprungs als einzelne Einheit behandelt. Die gesamten von diesem Ursprung gespeicherten Daten werden gelöscht.

Wenn ein Bucket als `"persistent"` markiert ist, werden die Inhalte nicht vom Benutzeragenten gelöscht, ohne dass entweder der Ursprung der Daten selbst oder der Benutzer dies explizit tut. Dies schließt Szenarien wie die Auswahl der Optionen "Caches löschen" oder "Neuste Verlauf löschen" durch den Benutzer ein. Der Benutzer wird speziell um Erlaubnis gebeten, um persistente Speicherbuckets der Seite zu entfernen.

Um mehr zu erfahren, siehe [Wann werden Daten gelöscht?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#when_is_data_evicted).

## Schnittstellen

- [`StorageManager`](/de/docs/Web/API/StorageManager)
  - : Bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers.

### Erweiterungen anderer Schnittstellen

- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) {{ReadOnlyInline}}
  - : Gibt das Singleton [`StorageManager`](/de/docs/Web/API/StorageManager)-Objekt zurück, das zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers auf Site-für-Site-/App-für-App-Basis verwendet wird.
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) {{ReadOnlyInline}}
  - : Gibt eine [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle zurück, um Persistenzberechtigungen zu verwalten und den verfügbaren Speicher zu schätzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Speicher im Web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quota Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
