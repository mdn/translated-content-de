---
title: SVGStringList
slug: Web/API/SVGStringList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für SVG-Zeichenfolgenlisten

Der `SVGStringList` definiert eine Liste von Zeichenfolgen.

Ein `SVGStringList`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu verändern, zu einer Ausnahme führen werden.

### Überblick über die Schnittstelle

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Auch implementieren</th>
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
            <code>replaceItem(string <em>newItem</em>, number <em>index</em>)</code>
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
        Ein Spiegelbild des Wertes in <code>numberOfItems</code>, für die Konsistenz
        mit anderen Schnittstellen. {{non-standard_inline}}
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name &amp; Argumente</th>
      <th>Rückgabewert</th>
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
          Löscht alle vorhandenen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
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
          Löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, sodass sie das durch den Parameter angegebene Einzelteil enthält. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die Liste eingefügt wurde.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
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
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen an dem Element werden sofort in der Liste widergespiegelt. Das erste Element ist die Nummer 0.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
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
          Fügt ein neues Element in die Liste an der angegebenen Position ein. Das erste Element ist die Nummer 0. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor der Entfernung des Elements liegt. Wenn der <code>index</code> gleich 0 ist, wird das neue Element an der Spitze der Liste eingefügt. Wenn der Index größer oder gleich <code>numberOfItems</code> ist, wird das neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
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
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn der Index größer oder gleich <code>numberOfItems</code> ist.
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
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            Ein {{domxref("DOMException")}} mit Code <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn der Index größer oder gleich <code>numberOfItems</code> ist.
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
            Ein {{domxref("DOMException")}} mit Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste auf ein schreibgeschütztes Attribut verweist oder wenn das Objekt selbst schreibgeschützt ist.
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
