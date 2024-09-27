---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG-String-Listen-Schnittstelle

Das `SVGStringList` definiert eine Liste von Zeichenfolgen.

Ein `SVGStringList`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

### Schnittstellenübersicht

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td>
        <ul>
          <li><code>void clear()</code></li>
          <li>
            string
            <code>initialize(string <em>newItem</em>)</code>
          </li>
          <li>
            string
            <code>getItem(number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>insertItemBefore(string <em>newItem</em>, number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>replaceItem(string <em>newItem</em>,
              number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>removeItem(number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>appendItem(string <em>newItem</em>)</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>readonly unsigned long <code>numberOfItems</code></li>
          <li>
            readonly unsigned long
            <code>length</code> {{non-standard_inline}}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGStringList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Typ</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>numberOfItems</code></td>
      <td><code>unsigned long</code></td>
      <td>Die Anzahl der Elemente in der Liste.</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Ein Spiegelwert der in <code>numberOfItems</code>, für Konsistenz mit anderen Schnittstellen. {{non-standard_inline}}
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name &amp; Argumente</th>
      <th>Rückgabe</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>clear</strong>()</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Löscht alle bestehenden aktuellen Elemente aus der Liste, sodass eine leere Liste entsteht.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>initialize</strong>(string <em>newItem</em>)</code>
      </td>
      <td>string</td>
      <td>
        <p>
          Löscht alle bestehenden aktuellen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene Einzelobjekt zu halten. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(number <em>index</em>)</code>
      </td>
      <td>string</td>
      <td>
        <p>
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Jegliche Änderungen am Element werden sofort in der Liste widergespiegelt. Das erste Element hat die Nummer 0.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(string <em>newItem</em>, number <em>index</em>)</code>
      </td>
      <td>string</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat die Nummer 0. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor der Entfernung des Elements liegt. Wenn der <code>index</code> gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt. Wenn der Index größer oder gleich <code>numberOfItems</code> ist, wird das neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(string <em>newItem</em>, number <em>index</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          Ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>removeItem</strong>(in unsigned long <em>index</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>Entfernt ein bestehendes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(string <em>newItem</em>)</code
        >
      </td>
      <td>string</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
